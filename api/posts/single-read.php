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
$item->id = isset($_GET['id']) ? $_GET['id'] : die();

$item->getSinglePost();
if ($item->name != null) {

    // create array
    $emp_arr = array(
        "id" => $item->id,
        "title" => $item->title,
        "summary" => $item->summary,
        "content" => $item->content,
        "date" => $item->date,
        "url" => $item->url,
        "likes" => $item->likes,
        "img" => $item->img,
    );

    http_response_code(200);
    echo json_encode($emp_arr);
} else {
    http_response_code(404);
    echo json_encode("Employee not found.");
}
