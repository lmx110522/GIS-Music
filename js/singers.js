$(function () {
    $(".search-input").bind("input propertychange",function () {
        $(".pholder").hide()
        $("#search_table").append(" <tr>\n<td width='10%'><i class='layui-icon layui-icon-search'></i></td>" +
            "                        <td width='30%'><a href='#'>周杰伦周杰伦</a></td>\n" +
            "                        <td width='60%'><a href='#'>在库歌曲共有20首</a></td>\n" +
            "                    </tr>")
        var value = $(".search-input").val();
        if(value.trim().length == 0){
            $(".pholder").show()
            $("#search_table").empty()
        }
    })

})