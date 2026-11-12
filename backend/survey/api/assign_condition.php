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

// 1. Payload einlesen und JSON dekodieren
$jsonInput = file_get_contents("php://input");
$data = json_decode($jsonInput, true);

if ($data === null || !isset($data['participantId']) || empty($data['participantId'])) {
    http_response_code(400);
    echo json_encode(["error" => "Missing or invalid participantId"]);
    exit;
}
// Sicherheit
$participantId = preg_replace('/[^a-zA-Z0-9\-]/', '', (string)$data['participantId']);

if (strlen($participantId) !== 36) {
    http_response_code(400);
    echo json_encode(["error" => "Malformed participantId"]);
    exit;
}

// Pfade definieren
$conditionFolder = __DIR__ . "/../data/participant_conditions/";
$myConditionFile = $conditionFolder . $participantId . ".json";
$counterFile = __DIR__ . "/../data/condition_counter.txt";

// FALL A: Teilnehmer hat bereits eine Bedingung zugewiesen bekommen
$existingData = @file_get_contents($myConditionFile);
if ($existingData !== false) {
    echo $existingData;
    exit;
}

// FALL B: Neuer Teilnehmer -> Bedingung ermitteln (mit LOCK_EX gegen Race Conditions)
if (!is_dir($conditionFolder)) {
	mkdir($conditionFolder, 0777, true);
}

if (!file_exists($counterFile)) {
    file_put_contents($counterFile, "0");
}

$fp = fopen($counterFile, "c+");
if (!$fp) {
    http_response_code(500);
    echo json_encode(["error" => "Could not open condition counter file"]);
    exit;
}

// Lock
flock($fp, LOCK_EX);

$participantNumber = intval(trim(stream_get_contents($fp)));
$participantNumber++;

// Counter auf dem Server aktualisieren
rewind($fp);
ftruncate($fp, 0);
fwrite($fp, (string)$participantNumber);
fflush($fp);

// Lock aufheben
flock($fp, LOCK_UN);
fclose($fp);

// Alternierende Zuweisung 50/50
$conditionOrder = ($participantNumber % 2 === 1) ? ["gen", "role_spec"] : ["role_spec", "gen"];
$payloadToSend = ["conditionOrder" => $conditionOrder];
$jsonOutput = json_encode($payloadToSend, JSON_UNESCAPED_SLASHES);

// Zuordnung in datei legen
file_put_contents($myConditionFile, $jsonOutput, LOCK_EX);

echo $jsonOutput;
