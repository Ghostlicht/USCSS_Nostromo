$(document).ready(function(){
	// radio button update hiden div and submit position
	$("input[type='radio'][name='military']").click(function(){
		switch($("input[type='radio'][name='military']:checked").val()){
			case "yes":
				$(".militaryOnly").css("display","block");
				if($(document).width()>991){
					$("#submit-2").append($("#submit-1>input"));
				}
				break;
			case "no":
				$(".militaryOnly").css("display","none");
				if($(document).width()>991){
					$("#submit-1").append($("#submit-2>input"));
				}
				break;
		}
	});

	// resize update
	$(window).resize(function(){
		if($(document).width()<=991){
			$("#submit-2").append($("#submit-1>input"));
		}else if($(document).width()>991&&$("input[type='radio'][name='military'][value='yes']").is(":checked")){
			$("#submit-2").append($("#submit-1>input"));
		}else if($(document).width()>991){
			$("#submit-1").append($("#submit-2>input"));
		}
	});
});