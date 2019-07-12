<?php
include "./helper.php";
if (!isset($_REQUEST["uname"])) {
    print_r('true');
}

//接收前端发过来的参数
$uname = $_REQUEST["uname"];
//准备sql语句
$sql = "SELECT * FROM `userinfo` WHERE `u_name`='" . $uname . "'";
$resultData = sqlQuery($sql);
// $resultData  

// insert ,update,delete 返回受1行影响
//if ($resultData == 1) { }
// 查询 (select)
if ($resultData->num_rows >= 1) {
    print_r('false');
} else {
    print_r('true');
}
