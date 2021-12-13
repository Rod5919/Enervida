<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Methods: POST");
header("Access-Control-Max-Age: 3600");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");

include_once '../database.php';
include_once './ally.php';
$database = new Database();
$db = $database->getConnection();
$item = new Ally($db);


$item->name = $_POST['name'];
$item->acro = $_POST['acro'];
$item->description = $_POST['description'];
$item->logo = $_POST['logo'];
$item->website = $_POST['website'];
$item->fb = $_POST['fb'];
$item->whats = $_POST['whats'];
$item->lk = $_POST['lk'];



if ($item->createAlly()) {
    echo 'Ally created successfully.';
} else {
    echo 'Ally could not be created.';
}
