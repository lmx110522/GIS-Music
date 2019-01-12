$(function () {
    getAdder()
    //注意：选项卡 依赖 element 模块，否则无法进行功能性操作
    layui.use('element', function(){
        var element = layui.element;
    });
    slide_verify()
    layui.define(['layer', 'form'], function(){
        var layer = layui.layer
            ,form = layui.form;
    });

    $("#open_login").click(function () {
        $('.login_modal').modal('show')
    })
   $(".scroll-to-top span").click(function () {
       $('html,body').animate({
           scrollTop: 0
       }, 400);
   })
    $("div.tool-bar-menu a").eq(0).click(function () {
       $(".tool-bar").css({
           "right":"203px"
       })
        var setInter = setInterval(function () {
            $("div.my_collect").css("display","block");
            clearInterval(setInter)
        },400)
    })
    $("section , nav , header").click(function () {
        $("div.my_collect").css("display","none");

        var setInter = setInterval(function () {
            $(".tool-bar").css({
                "right":"0px"
            })
            clearInterval(setInter)
        },100)
    })
    $(".close_btn").click(function () {
        $(".login_page").fadeOut(500)
        $(".bar3").empty()
        $(".submit_btn1").removeClass("submit_btn").addClass("layui-btn-disabled")
        slide_verify()
    })
    $(".open_login_page").click(function (e) {
        e.preventDefault();
        $(".login_page").fadeIn(300)
    })
})

function slide_verify() {
    $('.bar3').slideToUnlock({
        text : '先滑动我才可以登录哦~',
        succText : '解锁成功，您可以登录'
    });
}

function getAdder(){
    //获取当前位置
    var geolocation = new BMap.Geolocation();
    geolocation.getCurrentPosition(function(r){
        if(this.getStatus() == BMAP_STATUS_SUCCESS){
            mk = new BMap.Marker(r.point);
            getAddress(r.point);
        }else {
            alert('failed'+this.getStatus());
        }
    });
}
//获取地址信息，设置地址label
function getAddress(point){
    var gc = new BMap.Geocoder();
    gc.getLocation(point, function(rs){
        var addComp = rs.addressComponents;
        var address =  addComp.province +  addComp.city + addComp.district + addComp.street + addComp.streetNumber;//获取地址
        $("#baidu_geo").text(address);
    });

}