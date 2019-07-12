<?php
/**
 * Created by PhpStorm.
 * User: dp
 * Date: 2019/6/13
 * Time: 17:18
 */

session_start();
if(isset($_SESSION["userInfo"])){
    print_r(json_encode(array("status"=>true,"msg"=>"已登录")));
}else{
    print_r(json_encode(array("status"=>false,"msg"=>"未登录")));
}