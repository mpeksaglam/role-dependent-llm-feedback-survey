<?php
declare(strict_types=1);
// Set headers to accept JSON requests
header("Content-Type: application/json");
header("Access-Control-Allow-Origin: https://kiro4lemi-survey.vercel.app");
header("Access-Control-Allow-Headers: Content-Type");
header("Access-Control-Allow-Methods: POST");

// Only allow POST requests
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(["error" => "Method not allowed"]);
    exit;
}

// Read incoming JSON string from Next.js
$jsonInput = file_get_contents("php://input");
// enfore payload body maximum for safety
if (strlen($jsonInput) > 500000) {
	http_response_code(413);
	echo json_encode(["error" => "Payload too large"]);
	exit;
}
$data = json_decode($jsonInput, true);
if ($data === null) {
	http_response_code(400);
	echo json_encode(["error" => "Invalid JSON"]);
	exit;
}

// Validate that we have a participantId
if (!isset($data['participantId']) || empty($data['participantId'])) {
    http_response_code(400);
    echo json_encode(["error" => "Missing participantId"]);
    exit;
}

// Sanitize filename to prevent directory traversal attacks
$participantId = preg_replace('/[^a-zA-Z0-9\-]/', '', (string)$data['participantId']);

// validate UUID formatting constraints
if (strlen($participantId) !== 36) {
	http_response_code(400);
	echo json_encode(["error" => "Malformed structural key"]);
	exit;
}
$filePath = __DIR__ . "/../data/sessions/" . $participantId . ".json";

// Save the raw JSON string safely to the file
if (file_put_contents($filePath, $jsonInput, LOCK_EX) !== false) {
    echo json_encode(["success" => true]);
} else {
    http_response_code(500);
    echo json_encode(["error" => "Failed to write session file. Check folder permissions."]);
}
