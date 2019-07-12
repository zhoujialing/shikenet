
let global = {};

$(function () {


    $.ajax({
        url: "./../server/cartlist.php",
        dataType: "json"
    }).then(function (res) {
        global = res.data;
        if (res.data == undefined) {
            $(".car_empty").show().siblings().hide()
            $(".process").hide()
            $(".logo").show()

            return;
        } else {
            $(".car_empty").hide().siblings().show()
            $(".process").show()
            $(".logo").hide()
            loadData(res.data)

        }
    })




    var pricesum = parseInt($(".totalPrice").text())

    $(window).on("load", function () {
        var result = tPrice(pricesum)
        $(".totalPrice").text(result)
    })


    function loadData(data) {
        data.forEach((el, index) => {

            var strHtml = ``;
            strHtml += `<ul data-index=${index} class="list clear">`
            strHtml += `<li><img src=${el.p_url}></li>`
            strHtml += `<li><p>${el.p_name}</p><span>左眼:${el.p_ldegree}</span>&nbsp;&nbsp;&nbsp<span>右眼:${el.p_rdegree}</span></li>`
            strHtml += `<li>${el.p_price}</li>`
            strHtml += `<li><button class="jian">-</button><input value=${el.p_num}><button class="jia">+</button></li>`
            strHtml += `<li class="goods_price">${el.p_total}</li>`
            strHtml += `<li><a class="del" href='javascript:;;'>删除</a></li>`
            strHtml += `</ul>`

            $(".cartlist").append(strHtml);

        })

    }
    console.log($(".goods_price"))
    //数量--
    $(".cartlist").on("click", ".jian", function () {
        var num = $(this).parents("li").find("input").val();
        if (num == 1) {
            return;
        }
        $(this).parents("li").find("input").val(--num);
        var price = $(this).parents("li").prev().text();
        $(this).parents("li").next().text(num * price);

        var singleObj = global[$(this).parents("ul").data("index")];
        console.log(singleObj)
        var updateObj = {
            cid: singleObj.c_id,
            num
        }

        $.ajax({
            url: "./../server/updateCart.php",
            data: updateObj,
            type: "post",
            dataType: "json"
        }).done(function () {

        })


        var result = tPrice(pricesum)
        $(".totalPrice").text(result)

    })

    //数量++
    $(".cartlist").on("click", ".jia", function () {
        var num = $(this).parents("li").find("input").val();
        $(this).parents("li").find("input").val(++num);
        var price = $(this).parents("li").prev().text();
        $(this).parents("li").next().text(num * price);

        var singleObj = global[$(this).parents("ul").data("index")];
        console.log(singleObj)
        var updateObj = {
            cid: singleObj.c_id,
            num
        }

        $.ajax({
            url: "./../server/updateCart.php",
            data: updateObj,
            type: "post",
            dataType: "json"
        }).done(function () {

        })
        var result = tPrice(pricesum)
        $(".totalPrice").text(result)
    })

    //删除
    $(".cartlist").on("click", ".del", function () {
        var singleObj = global[$(this).parents("ul").data("index")];
        let self = this;
        layer.confirm("确定要删除吗?", {
            icon: 3,
            btn: ["删除", "取消"]
        }, function (index) {
            $.ajax({
                url: "./../server/removeCart.php",
                data: {
                    cid: singleObj.c_id,
                },
                dataType: "json",
                type: "post"
            }).then(function (res) {
                if (res.status == 1) {
                    layer.msg("删除成功")
                    $(self).parents("ul").remove();
                } else {
                    layer.msg("删除失败")
                }

                // location.reload()
                var result = tPrice(pricesum)
                $(".totalPrice").text(result)

                if ($(".list").children().length <= 1) {
                    $(".car_empty").show().siblings().hide()
                    $(".process").hide()
                    $(".logo").show()
                }


                layer.close(index)
            })
        })

    })


    function tPrice(sum) {
        $(".goods_price").each(function (el, index) {
            sum += parseInt($(this).text())
        })
        return sum
    }

})






