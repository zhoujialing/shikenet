<?php
/**
 * Created by PhpStorm.
 * User: dp
 * Date: 2019/6/13
 * Time: 16:50
 */

if($_SERVER["REQUEST_METHOD"]=="GET"){
    $result=array("msg"=>"不支持get请求","status"=>-1);
    print_r(json_encode($result));
    return;
}

if(!(isset($_POST["uname"])&&isset($_POST["upwd"]))){
    $result=array("msg"=>"参数不完整","status"=>-2);
    print_r(json_encode($result));
    return;
}

include "helper.php";

//准备sql语句
$uname=$_POST["uname"];
$upwd=$_POST["upwd"];
$uemail=$_POST["uemail"];
$utelphone=$_POST["utelphone"];

$sql="INSERT INTO `usefo` (`u_name`,`u_pwd`,`u_telphone`,`u_email`)VALUES('".$uname."','".$upwd."','".$utelphone."','".$uemail."')";

//什么情况下是状态?
//只有查询返回时一个对象
$resultData=sqlQuery($sql);
if($resultData==1){
    $result=array("msg"=>"注册成功","status"=>1);
    print_r(json_encode($result));
}else{
    $result=array("msg"=>"注册失败","status"=>-3);
    print_r(json_encode($result));
}