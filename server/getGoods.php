<?php
header("Content-Type:application/json;charset=utf-8");
if (isset($_REQUEST["pid"])) {
    $PID = $_REQUEST["pid"];
    // 根据id获取指定产品

    $cartListStr = removeBOM(file_get_contents("./data/cartList.json"));
    $cartListArr = json_decode($cartListStr);

    for ($i = 0; $i < count($cartListArr); $i++) {
        if ($cartListArr[$i]->pid == $PID) {
            print_r(json_encode($cartListArr[$i]));
            break;
        }
    }
} else {
    //没id就把所有的数据显示出去
    print_r(file_get_contents("./data/cartList.json"));
}

function removeBOM($data) {
    if (0 === strpos(bin2hex($data), 'efbbbf')) {
        return substr($data, 3);
    }
    return $data;
}