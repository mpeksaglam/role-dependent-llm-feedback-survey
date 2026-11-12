<?php
declare(strict_types=1);
header("Content-Type: application/json");
header("Access-Control-Allow-Origin: https://kiro4lemi-survey.vercel.app");
header("Access-Control-Allow-Headers: Content-Type");
header("Access-Control-Allow-Methods: GET");

if ($_SERVER['REQUEST_METHOD'] !== 'GET') {
    http_response_code(405);
    echo json_encode(["error" => "Method not allowed"]);
    exit;
}

$participantId = isset($_GET['participantId']) ? (string)$_GET['participantId'] : '';
$participantId = preg_replace('/[^a-zA-Z0-9\-]/', '', $participantId);

if (empty($participantId) || strlen($participantId) !== 36) {
    http_response_code(400);
    echo json_encode(["error" => "Missing/Invalid participantId parameter"]);
    exit;
}

$filePath = __DIR__ . "/../data/sessions/" . $participantId . ".json";

if (!file_exists($filePath)) {
    http_response_code(404);
	echo json_encode(null); // Matches Next.js expectation of returning null on 404 to initialize new user cleanly
	exit;
}

// file exists
$content = file_get_contents($filePath);

// unexpected reading errors
if ($content === false) {
	http_response_code(500);
	echo json_encode(["error" => "Failed to read session data cache state"]);
	exit;
}
// No problems, output content
echo $content;
