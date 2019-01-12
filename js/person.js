$(function () {
    $(".text-area").autoTextarea({
        maxHeight:570,
        minHeight:100
    });
    $(".edit_msg").click(function () {
        if($(this).hasClass('save_msg')){
            $(".my_layui input,textarea").addClass('wait_edit')
            $(this).text("编辑个人信息")
            $(this).removeClass('save_msg')
        }
        else{
            $("*").removeClass('wait_edit');
            $(this).html("<b style='color: orangered'>保存个人信息</b>")
            $(this).addClass('save_msg')
        }

    })
    $("#change_head_img").click(function () {
        $("#doc-modal-1").modal({width:'600px'});
    })
    $("#headimg").mouseenter(function () {
        $(".change_head").show()
    })
    $(".change_head").mouseleave(function () {
        $(".change_head").hide()
    })
})