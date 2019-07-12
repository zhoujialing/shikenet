<?php



if ($_SERVER["REQUEST_METHOD"] == "GET") {
    return;
}

$pid = $_REQUEST["pid"];
$carturl = $_REQUEST["carturl"];
$pname = $_REQUEST["pname"];
$pprice = $_REQUEST["pprice"];
$lnum = $_REQUEST["lnum"];
$ldegree=$_REQUEST["ldegree"];
$rnum = $_REQUEST["rnum"];
$rdegree=$_REQUEST["rdegree"];
$u_id = $_REQUEST["u_id"];
$num=$_REQUEST["num"];
$total = $num * $pprice;

include "./helper.php";

//准备sql语句

//1.是否已经购买过,

$query = "SELECT * FROM `cartlist` WHERE p_id='". $pid . "' AND `p_ldegree`='" . $ldegree . "'  AND `u_id` ='" . $u_id . "' AND `p_rdegree` ='" . $rdegree . "'";

$result = sqlQuery($query);
print_r($result);
if ($result->num_rows >=1) {
    //如果已经购买了 修改数量
    $update = "UPDATE `cartlist` SET `p_lnum`=p_lnum+'". $lnum ."' ,`p_rnum`=p_rnum+'". $rnum ."',`p_total`=p_num*p_price  where `p_id` ='" . $pid . "'  AND `u_id` ='" . $u_id . "' ";

    $uReulst = sqlQuery($update); //更新的结果
    if ($uReulst == 1) {
        print_r(json_encode(array("msg" => "加入成功", "status" => 1)));
    } else {
        print_r(json_encode(array("msg" => "加入成功", "status" => 2)));
    }
} else {
    //如果没购买,插入一条记录
    $insert = " INSERT INTO `cartlist` (`p_id`,`p_name`,`p_price`,`p_url`,`p_ldegree`,`p_rdegree`,`p_lnum`,`p_rnum`,`p_num`,`p_total`,`u_id`) ";
    $insert .= "VALUES('" .$pid. "','" .$pname. "',' " .$pprice. "' , '" .$carturl.  "','" .$ldegree.   "','" .$rdegree.   "','" .$lnum."','" .$rnum."','" .$num."','" .$num * $pprice."','" .$u_id."') ";
    print_r($insert);
    $uReulst = sqlQuery($insert); //更新的结果
    if ($uReulst == 1) {
        print_r(json_encode(array("msg" => "加入成功i", "status" => 1)));
    } else {
        print_r(json_encode(array("msg" => "加入成功i", "status" => 2)));
    }
}