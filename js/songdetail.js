$(function () {
    $("body").delegate(".song_word_open","click",function () {
        $(".song_content").stop()
        $(".song_content").fadeIn(1000);
        $(".song_content").after("<a href='#' class=\"song_word_operate song_word_close\">关闭歌词 <i class=\"layui-icon layui-icon-up\"></i></a>")
        $(".song_word_open").remove();
    })
    $("body").delegate(".song_word_close","click",function () {
        $(".song_content").stop()
        $(".song_content").fadeOut(1000);
        $(".song_words h2").after("<a href='#' class=\"song_word_operate song_word_open\">展开歌词 <i class=\"layui-icon layui-icon-down\"></i></a>")
        $(".song_word_close").remove();
    })
    $(".text-area").bind("input propertychange",function () {
        var value = $(this).val();
        if(value.trim().length == 0){
           $(this).next(".comment_btn").removeClass("layui-btn-danger").addClass("layui-btn-disabled");
        }else{
           $(this).next(".comment_btn").addClass("layui-btn-danger").removeClass("layui-btn-disabled");
        }
    })
    $(".text-area").autoTextarea({
        maxHeight:570,
        minHeight:100
    });
    $("body").delegate(".comment_open","click",function (e) {
        e.preventDefault()
        $(this).parents("ul.comment_one").find("ul").stop()
        $(this).parents("ul.comment_one").find("ul").fadeIn(700);
        $(this).find("b").text("关闭")
        $(this).addClass('comment_close').removeClass('comment_open')
    })

    $("body").delegate(".comment_close","click",function (e) {
        e.preventDefault()
        $(this).parents("ul.comment_one").find("ul").stop()
        $(this).parents("ul.comment_one").find("ul").fadeOut(500);
        $(this).find("b").text("展开")
        $(this).removeClass('comment_close').addClass('comment_open')
    })

})


