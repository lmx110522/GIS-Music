$(function () {
    //得到父页面的iframe框架的对象
    var obj = parent.document.getElementById("child");
    //把当前页面内容的高度动态赋给iframe框架的高
    obj.height = $("#main_body")[0].scrollHeight;
    var my_inter = setInterval(function () {
        $("#hide_btn").hide();
        $("div.audio-container").slideUp(500)
        clearInterval(my_inter)
    },2000)
    $('body').mousemove(function(e) {
        e = e || window.event;
        __xx = e.pageX || e.clientX + document.body.scroolLeft;
        __yy = e.pageY || e.clientY + document.body.scrollTop;
        var scroll = $(window).scrollTop() + $(window).height()
        var height = parseInt(__yy);
        if(height>= (scroll-80)){
            $("div.audio-container").show()
            $("#hide_btn").show();
        }
        if(height <= (scroll-140)){
            $("div.audio-container").hide()
        }
    });
    $("#hide_btn").click(function () {
        $("#hide_btn").hide();
        $("div.audio-container").slideUp(500)
    })
})