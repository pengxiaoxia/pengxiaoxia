$(function(){$(".tab_uls li").on("click",function(){$(this).addClass("hover").siblings().removeClass("hover")}),$(".icon-remove-sign").addClass("none");var o=1;$(".compile").on("click",function(){1==o?($(this).html("完成"),$(".add").show(),$(".icon-remove-sign").addClass("block").removeClass("none"),$(".addbtn").on("click",function(){$(".addinfo").addClass("block").removeClass("none")}),$(".subbtn").on("click",function(){""==!$(".prompt").val().trim()&&($(".uls").append($("<li><button class='btn btn-default'>"+$(".prompt").val()+"</button><i class='icon-remove-sign'></i></li>")),$(".addinfo").addClass("none").removeClass("block"))}),$(".uls").on("click","li i",function(){$(this).parent("li").remove(),console.log("fdf")}),o=0):0==o&&($(".addinfo").addClass("none").removeClass("block"),$(this).html("编辑"),$(".add").hide(),$(".icon-remove-sign").addClass("none").removeClass("block"),o=1)})});