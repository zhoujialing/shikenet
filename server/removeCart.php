<?php


if ($_SERVER["REQUEST_METHOD"] == "GET") {
    print_r(json_encode(array("msg" => "不支持get请求", "status" => 4)));
    return;
}

session_start();
if (!isset($_SESSION["userInfo"])) {
    print_r(json_encode(array("msg" => "请先登录", "status" => 3)));
    return;
}

$cid = $_REQUEST["cid"];

include "./helper.php";

$update="DELETE FROM cartlist WHERE  c_id='" . $cid . "'";

$uReulst = sqlQuery($update);
if ($uReulst == 1) {
    print_r(json_encode(array("msg" => "删除成功", "status" => 1)));
} else {
    print_r(json_encode(array("msg" => "删除失败", "status" => 2)));
}