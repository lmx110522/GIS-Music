$(function(){
    $("body").delegate("span.crumb-select-item",'mouseenter',function(event){
            $(this).addClass("crumb-select-itemon");
    });
    $("body").delegate("span.crumb-select-item",'mouseleave',function(event){
        $(this).removeClass("crumb-select-itemon");
    });
    $("body").delegate("span.crumb-select-item",'click', function(event){
        event.preventDefault();
        $(this).remove();
        var TTR = $(this).find("em").text();
        $(".show-con a").each(function(){
            var TT = $(this).text();
            THI = $(this);
            THIPP = $(this).parents("dl");
            if(TTR==TT){
                THI.removeClass("nzw12");
                THIPP.css("display","block");
            }
        })
    });
    $(".show-con a").click(function(event){
        event.preventDefault();
        THIP = $(this).parents("dl");
        if($(this).hasClass("nzw12")){
        }else{
            $(this).addClass("nzw12");
            var zhiclass = $(this).parents("dd").siblings("dt").find("a").text();
            zhicon = $(this).text();
            tianjaneir="<span class='crumb-select-item'><a href='/'><b>"+zhiclass+"</b><em>"+zhicon+"</em><i class='icon-remove'></i></a></span>"
            $(".shaixuan-tj").children().last().after(tianjaneir);
            THIP.css("display","none");
        }
    });
    $(".show-more").click(function(event){
        event.preventDefault();
        var ticon = $(this).find("i");
        tspan = $(this).find("span");
        if($(this).hasClass("zk")){
            $(this).siblings(".show-con").css("height","30px");
            ticon.removeClass("icon-angle-up");
            ticon.addClass("icon-angle-down");
            tspan.html("更多");
            $(this).removeClass("zk")
        }else{
            $(this).siblings(".show-con").css("height","auto");
            ticon.removeClass("icon-angle-down");
            ticon.addClass("icon-angle-up");
            tspan.html("收起");
            $(this).addClass("zk")
        }
    });
    $("#sxbtn").click(function(event){
        event.preventDefault();
        var xicon = $(this).find("span i");
        xspan = $(this).find("span em");
        if($(this).hasClass("zkon")){
            $(".sxcon").stop()
            xspan.text("收起筛选");
            xicon.removeClass("icon-angle-down");
            xicon.addClass("icon-angle-up");
            $(".sxcon").slideDown();
            $(this).removeClass("zkon")
        }else{
            $(".sxcon").stop()
            xspan.text("查看筛选");
            xicon.removeClass("icon-angle-up");
            xicon.addClass("icon-angle-down");
            $(".sxcon").slideUp();
            $(this).addClass("zkon")
        }
    })
})