<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Methods: POST");
header("Access-Control-Max-Age: 3600");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");

include_once '../database.php';
include_once './collab.php';
$database = new Database();
$db = $database->getConnection();
$item = new Collab($db);


$item->first_name = $_POST['first_name'];
$item->last_name = $_POST['last_name'];
$item->position = $_POST['position'];
$item->photo = $_POST['photo'];
$item->whats = $_POST['whats'];
$item->fb = $_POST['fb'];
$item->lk = $_POST['lk'];
$item->yt = $_POST['yt'];
$item->ig = $_POST['ig'];

// echo $item->title;

if ($item->createCollab()) {
    echo 'Collab created successfully.';
} else {
    echo 'Collab could not be created.';
}
