<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Methods: POST");
header("Access-Control-Max-Age: 3600");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");

include_once '../database.php';
include_once './adoption.php';
$database = new Database();
$db = $database->getConnection();
$item = new Adoption($db);


$item->name = $_POST['name'];
$item->description = $_POST['description'];
$item->img = $_POST['img'];

// echo $item->title;

if ($item->createAdoption()) {
    echo 'Adoption created successfully.';
} else {
    echo 'Adoption could not be created.';
}
