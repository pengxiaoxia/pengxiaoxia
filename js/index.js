/**
 * Created by xiaoxia on 2017/3/11.
 */
$(function(){
    $('.tab_uls li').on("click",function(){
        $(this).addClass('hover').siblings().removeClass("hover")
    })
    $(".icon-remove-sign").addClass("none")
    var btn=1;
    $(".compile").on("click",function(){
        if(btn==1){
            $(this).html("完成")
            $(".add").show()
            $(".icon-remove-sign").addClass("block").removeClass("none")
            $(".addbtn").on("click",function(){
                $(".addinfo").addClass("block").removeClass("none")
            })
            $(".subbtn").on("click",function(){
                if(!($('.prompt').val()).trim()==''){
                    $(".uls").append( $("<li><button class='btn btn-default'>"+$('.prompt').val()+"</button><i class='icon-remove-sign'></i></li>"))
                    $(".addinfo").addClass("none").removeClass("block")
                }
            })
            $(".uls").on("click","li i",function(){
                $(this).parent("li").remove()

                console.log("fdf")
            })
            btn=0
        }else if(btn==0){
            $(".addinfo").addClass("none").removeClass("block")
            $(this).html("编辑")
            $(".add").hide()
            $(".icon-remove-sign").addClass("none").removeClass("block")
            btn=1
        }
    })

})



















