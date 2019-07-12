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
$p_num = $_REQUEST["num"];

include "./helper.php";

$update="UPDATE `cartlist` SET p_num='" . $p_num . "',p_total=p_num*p_price WHERE c_id='" . $cid . "'";

$uReulst = sqlQuery($update); //更新的结果
if ($uReulst == 1) {
    print_r(json_encode(array("msg" => "加入成功", "status" => 1)));
} else {
    print_r(json_encode(array("msg" => "加入成功", "status" => 2)));
}