
$(function () {
    $.ajax({
        url: "./../server/getGoods.php",
        dataType: "json"
    }).done(function (res) {

        res.forEach((el, index) => {

            let strHtml = `
            <li>
            <div class="hot_pro">
                    <a href="./product.html?pid=${el.pid}">
                        
                          <img src="${el.url}" alt="">
                          <p >${el.uname}</p>
                          <p><span class="price">¥${el.pprice}</span><span class="tag">降价</span></p>
                          <p class="pro_com">
                          <span>741</span>评论
                          <span class="tep">|</span>
                          <span>98%</span>好评
                      </p>
                     </a>
                     </div>
                     </li>
                     `;
            $("#hot_box").append(strHtml);


        });
    })


    //轮播图左边导航栏
    $(".menu_b").find("h3").each(function (index, el) {

        $(el).on("mouseenter", function () {
            $(this).addClass("hover")
        }).on("mouseleave", function () {
            $(this).removeClass("hover")
        })
    })


    //视察公告和最新活动
    
    $(".gonggao").show().siblings("div").hide()
    $(".new .in_pro").find("li").on("mouseover", function (e) {
        let index=$(this).index()
        $(this).addClass("active").siblings().removeClass("active")
        index == 0?$(".gonggao").show().siblings("div").hide():$(".gonggao").hide().siblings("div").show()
        e.preventDefault();
        
    })

    //轮播图



    let imgIndex = 0
    $(".btn_left").on("click", function () {
        imgIndex -= 2
        if (imgIndex <= -2) {
            imgIndex = 5
        }
        clearInterval(timer);
        autoPlay()
    })
    $(".btn_right").on("click", function () {
        clearInterval(timer);
        autoPlay()
    })

    

    $(".fo_nav").find("li").eq(0).addClass("cur")
    function autoPlay() {
        imgIndex++;
        if (imgIndex > 6) {
            imgIndex = 0
        }

        //排他
        $(".fo_img").find("li").each(function (i, el) {
            $(".fo_img").find(el).hide();
            $(".fo_nav").find("li").eq(i).removeClass("cur")

        })
        $(".fo_img").find("li").eq(imgIndex).fadeIn("fast");
        $(".fo_nav").find("li").eq(imgIndex).addClass("cur")


    }
    let timer = setInterval(autoPlay, 3000)

    //鼠标移入清除定时器
    $(".focus").on("mouseenter", function () {
        clearInterval(timer)
        $(".btn").css("display", "block")
    })
    $(".focus").on("mouseleave", function () {
        timer = setInterval(autoPlay, 3000)
        $(".btn").css("display", "none")

    })
    

})


// 左端导航栏
$(function(){

    
    $(window).scroll(function(){
        var result=$(window).scrollTop()

        result>=900&&result<=3900? $(".lmenu").show():$(".lmenu").hide()
        
        if(result>=900&&result<=1500){
            $(".f0").css("background-position","53px 0px").parents("li").siblings().find("b").css("background-position","")
       
        }else if(result>1500&&result<=2000){
            $(".f1").css("background-position","53px -59px").parents("li").siblings().find("b").css("background-position","")
  
        }else if(result>2000&&result<=2800){
            $(".f2").css("background-position","53px -118px").parents("li").siblings().find("b").css("background-position","")

        }else if(result>2800&&result<=3300){
            $(".f3").css("background-position","53px -177px").parents("li").siblings().find("b").css("background-position","")
         
        }else{
            $(".f4").css("background-position","53px -231px").parents("li").siblings().find("b").css("background-position","")

        }
    })



    $(".lmenu").on("click",".f0",function(){
        $(window).scrollTop(900)
        return false;
    })
    $(".lmenu").on("click",".f1",function(){
        $(window).scrollTop(1600)
        return false;
    })
    $(".lmenu").on("click",".f2",function(){
        $(window).scrollTop(2200)
        return false;
    })
    $(".lmenu").on("click",".f3",function(){
        $(window).scrollTop(2900)
        return false;
    })
    $(".lmenu").on("click",".f4",function(){
        $(window).scrollTop(3400)
        return false;
    })
})

