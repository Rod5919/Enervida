<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Methods: POST");
header("Access-Control-Max-Age: 3600");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");

include_once '../database.php';
include_once './volunter.php';
$database = new Database();
$db = $database->getConnection();
$item = new Volunter($db);


$item->name = $_POST['name'];
$item->position = $_POST['position'];
$item->img = $_POST['img'];
$item->fb = $_POST['fb'];
$item->ig = $_POST['ig'];
$item->lk = $_POST['lk'];

// echo $item->title;

if ($item->createVolunter()) {
    echo 'Volunter created successfully.';
} else {
    echo 'Volunter could not be created.';
}
