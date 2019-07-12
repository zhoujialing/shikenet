<?php

session_start();
if (!isset($_SESSION["userInfo"])) {
    $result = array("msg" => "请先登录", "status" => 2);
    print_r(json_encode($result));
    return;
}

$userId = json_decode(json_encode($_SESSION["userInfo"]))->u_id;
include "./helper.php";

$querySQL = "SELECT *FROM `cartlist` WHERE u_id='" . $userId . "'";

$resultData = sqlQuery($querySQL);

$resultJSON = array("msg" => "查询失败", "status" => 3);

if($resultData->num_rows>=1){
    $resultJSON["msg"] = "查询完成";
    $resultJSON["status"] = 1;

    $data = array();
    while ($row = $resultData->fetch_assoc()) {
        array_push($data, $row);
    }

    $resultJSON["data"] = $data;
}

print_r(json_encode($resultJSON));