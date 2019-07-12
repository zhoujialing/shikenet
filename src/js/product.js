//放大镜
$(function () {
    let smallImg = $("#smallImg");
    let smallArea = $("#smallArea");
    let bigArea = $("#bigArea");
    let bigImg = $("#bigImg")
    let lit_img = $(".lit_img");


    $(window).scroll(function () {
        let result = $(window).scrollTop()
        let count = smallImg.offset().top;
        sm = Number(count) - Number(result)

        smallArea.css({
            width: (smallImg.width() / bigImg.width()) * bigArea.width(),
            height: (smallImg.height() / bigImg.height()) * bigArea.height()
        })
        smallImg.on("mouseenter", function () {
            smallArea.show();
            bigArea.show();
            $(document).on("mousemove", function (e) {
                let mX = e.clientX - smallImg.offset().left - smallArea.width() / 2
                let mY = e.clientY - sm - smallArea.height() / 2

                if (mX <= 0) {
                    mX = 0
                }
                if (mY <= 0) {
                    mY = 0
                }
                if (mX >= smallImg.width() - smallArea.width()) {
                    mX = smallImg.width() - smallArea.width()
                }
                if (mY >= smallImg.height() - smallArea.height()) {
                    mY = smallImg.height() - smallArea.height()
                }

                let iScale = bigArea.height() / smallArea.height()
                bigImg.css({
                    left: -mX * iScale,
                    top: -mY * iScale
                })

                smallArea.css({
                    left: mX,
                    top: mY,
                })
            })

        }).on("mouseleave", function () {
            smallArea.hide();
            bigArea.hide();
            $(document).off("mousemove")
        })


    })
})

//加入购物车
var globalSaveObj = {};
$(function () {
    function loadData() {
        var defer = $.Deferred(); 
        $.ajax({
            url: "./../server/islogin.php",
            dataType: "json"
        }).then(function (res) {

            if (res.status == true) {
                defer.resolve();
            } else {
                defer.reject();
            }
        })

        return defer;
    }

    loadData().then(function () {


        //获取产品id,跟id查询到该产品详细信息;
        var pid = window.location.search.split("?")[1].split("=")[1];
        
        $.ajax({
            url: "./../server/getGoods.php",
            data: {
                pid
            },
            dataType: "json"
        }).then(function (res) {
            globalSaveObj = res;
          
            $(".name h1").text(res.pname);
            $(".clear .brand").text(res.brand);
            $(".miaoSha .price").text(res.pprice);
            $(".clear .pid").text(res.pid);
            $("#smallImg").css('background-image', res.imgMid)
            $("#bigImg").css('background-image', res.imgMid)

            var strHtmlSmimg = ``;
            res.imgSm.forEach(function (el, index) {
                strHtmlSmimg +=
                    `<li> <img src="${el.url}"></li>`
            })
            $(".lit_img ul").html(strHtmlSmimg)


            res.imgBg.forEach(function (el, index) {
                var $imgMid=$(el).eq(0)

                $(".lit_img").find("li").each(function (i, e) {
                    $(this).click(function () {
                        if (index == i) {
                            $("#smallImg").css({
                                'background-image': `url(${el.url})`
                            })
                            $("#bigImg").css({
                                'background-image': `url(${el.url})`
                            })
                        }
                    })
                })
            })

           



        });

    }, function () {
        layer.confirm("你还没登录", {
            icon: 3,
            btn: ["立即登录", "拒绝登录"]
        }, function () {
            window.location.href = "./login.html";
        },
            function () {

            })
    });
})

//加入购物车按钮的点击事件
$(function () {




    $(".buy_btn").on("click", "#addCart", function () {

        if ($("#ldegree").val() == "" && $("#leyes_num").val() == "" && $("#rdegree").val() == "" && $("#reyes_num").val() == "") {
            layer.msg("请选择度数和数量");
            return;
        }
        globalSaveObj["u_id"] = JSON.parse(localStorage.getItem("user")).u_id;
        console.log(globalSaveObj)
        globalSaveObj["ldegree"] = $("#ldegree").val();
        globalSaveObj["lnum"] = $("#leyes_num").val();
        globalSaveObj["rdegree"] = $("#rdegree").val();
        globalSaveObj["rnum"] = $("#reyes_num").val();

        var znum= parseInt($("#reyes_num").val())+parseInt($("#leyes_num").val());
        globalSaveObj["num"]=znum;


        console.log(globalSaveObj)
        $.ajax({
            url: "./../server/AddCarts.php",
            type: "post",
            data: globalSaveObj,
            dataType: "json"
        }).then(function () {
          
        })
        layer.msg("加入成功")
    })
})



$(function(){

    $(".colloc_tittle").find("li").mouseover(function(){
        let index=$(this).index()
        $(".colloc_cont").eq(index).addClass("selected").siblings("div").removeClass("selected")
    })
})


//固定在顶部栏
$(function(){
    $(window).on("scroll",function(){
        var scroll=$(document).scrollTop()
        console.log(scroll)
        if(scroll>=1263&&scroll<=7442){
            $(".contain_rtit").addClass("menuFixd")
            var scrollH=$(".contain_rtit").height()
            $(".tab_body").css("margin-top","69px")
            $(".ctn_body").css("margin-top","94px")
            $(".pl").css("margin-top",scrollH)
           
        }else{
            $(".contain_rtit").removeClass("menuFixd")
            $(".tab_body").css( "margin-top","0px")
            $(".ctn_body").css("margin-top","47px")
            $(".pl").css("margin-top","0px")
        }
    })

    $(".news_tab").on("click","li",function(){
        $(this).addClass("active").siblings().removeClass("active")

        var index=$(this).index();
        index==0?$(".tab_body").show():$(".tab_body").hide()
        index<=1?$(".ctn_body").show():$(".ctn_body").hide()
    })

    

})