<?php
/**
 * Created by PhpStorm.
 * User: dp
 * Date: 2019/6/13
 * Time: 17:21
 */
session_start();
 //把session 清空,就是退出
$_SESSION["userInfo"] = null;