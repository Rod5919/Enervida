<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Methods: POST");
header("Access-Control-Max-Age: 3600");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");

include_once '../database.php';
include_once './post.php';
$database = new Database();
$db = $database->getConnection();
$item = new Post($db);


$item->title = $_POST['title'];
$item->summary = $_POST['summary'];
$item->content = $_POST['content'];
$item->date = $_POST['date'];
$item->url = $_POST['url'];
$item->img = $_POST['img'];

// echo $item->title;

if ($item->createPost()) {
    echo 'Post created successfully.';
} else {
    echo 'Post could not be created.';
}
