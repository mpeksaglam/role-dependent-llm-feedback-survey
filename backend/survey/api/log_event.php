<?php
declare(strict_types=1);
header("Content-Type: application/json");
header("Access-Control-Allow-Origin: https://kiro4lemi-survey.vercel.app");
header("Access-Control-Allow-Headers: Content-Type");
header("Access-Control-Allow-Methods: POST");

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(["error" => "Method not allowed"]);
    exit;
}

$jsonInput = file_get_contents("php://input");

if (strlen($jsonInput) > 500000) {
	http_response_code(413);
	echo json_encode(["error" => "Payload too large"]);
	exit;
}

$data = json_decode($jsonInput, true);

if ($data === null || !isset($data['participantId']) || !isset($data['eventType'])) {
    http_response_code(400);
    echo json_encode(["error" => "Invalid log packet data structure"]);
    exit;
}

$participantId = preg_replace('/[^a-zA-Z0-9\-]/', '', (string)$data['participantId']);

if (strlen($participantId) !== 36) {
	http_response_code(400);
	echo json_encode(["error" => "Malformed execution session identity key"]);
	exit;
}
$filePath = __DIR__ . "/../data/logs/" . $participantId . ".jsonl";

// Add a timestamp on the server side
$data['server_timestamp'] = gmdate("c");

// Re-encode to a single compressed raw text line, adding a newline character at the end (\n)
$singleLinePayload = json_encode($data) . "\n";

// FILE_APPEND and LOCK_EX safely puts the line at the bottom without erasing older events
if (file_put_contents($filePath, $singleLinePayload, FILE_APPEND | LOCK_EX) !== false) {
    echo json_encode(["success" => true]);
} else {
    http_response_code(500);
    echo json_encode(["error" => "Failed to write log file."]);
}
