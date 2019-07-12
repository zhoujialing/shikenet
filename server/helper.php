<?php
/**
 * Created by PhpStorm.
 * User: dp
 * Date: 2019/6/13
 * Time: 16:00
 */
function sqlQuery($sql){
    //1.创建数据库的链接
    $connection=new mysqli("127.0.0.1","root","","cs1902",3306);
    //2,设置链接字符集
    mysqli_query($connection,"set names utf8");
    //3.准备sql语句 传入
    //4.执行sql语句获取结果
    $result=$connection->query($sql);
    //5.关闭数据
    $connection->close();
    //6.返回结果
    return $result;
}