<?php
/**
 * Created by PhpStorm.
 * User: Administrator
 * Date: 2019/6/13
 * Time: 9:58
 */

if ($_SERVER["REQUEST_METHOD"] == "GET") {
    $result = array("msg" => "不支持get请求", "status" => -1);
    print_r(json_encode($result));
    return;
}

if (!(isset($_POST["uname"]) && isset($_POST["upwd"]))) {
    $result = array("msg" => "参数不完整", "status" => -2);
    print_r(json_encode($result));
    return;
}
$UNAME = $_REQUEST["uname"];
$UPWD = $_REQUEST["upwd"];
include "helper.php";

$sql="SELECT `u_id`,`u_name`,`u_telphone`,`u_email` FROM `usefo` WHERE u_name='".$UNAME."' AND u_pwd='".$UPWD."'";

$resultData=sqlQuery($sql);
if ($resultData->num_rows>=1){
    //如果登录了,就把当前的登录者的信息保存到 session
    session_start();
    $userData=$resultData->fetch_assoc();
    $_SESSION["userInfo"]=$userData; //array
    $result = array("msg" => "登录成功", "status" => 1,"data"=>$userData);
    print_r(json_encode($result));
}else{
    $result = array("msg" => "登录失败", "status" => -3);
    print_r(json_encode($result));
}