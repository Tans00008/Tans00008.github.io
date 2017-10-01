/*
本程序由留芳网（http://www.liufw.com）二次开发，版权属于原作者所有仅限娱乐，不得用于商业用途。
请保留此版权声明！！！
*/
$(document).ready(function(){

			var visible = true;

			$("#update").click(function(e){
				e.preventDefault();
				$("#bubbles").remove();
				$("body").prepend('<div id="bubbles"/>');

				if(!$("#fullscreen").is(':checked')){
					$("#bubbles").addClass("block");
				}

				$("#bubbles").bubbler(
					{
				        color: $("#color").val(),
				        ammount: $("#ammount").val(),
				        min: $("#min").val(),
				        max: $("#max").val(),
				        time: $("#time").val(),
				        vertical:$("#vertical").is(':checked'),
				        horizontal:$("#horizontal").is(':checked')
					}
				);


			});

			$("#bubbles").bubbler();

			setTimeout(function(){$("#demoform").animate({left:-240},200);visible=false;},1000);
			
			
			$("#demoform a").click(function(){
				if(visible){
					$("#demoform").stop(true,true).animate({left:-240},200);
				}else{
					$("#demoform").stop(true,true).animate({left:0},200);
				}
				visible = !visible;
			})

			$('#color').colpick({
				layout:'hex',
				submit:0,
				color: '1D2833',
				colorScheme:'dark',
				onChange:function(hsb,hex,rgb,fromSetColor) {
					if(!fromSetColor) $('#color').val('#'+hex).css({'background':'#'+hex,'color':'#'+hex});
				},
				onSubmit:function(hsb,hex,rgb,el) {
					$('#color').colpickHide();
				}
			});

			$(".slide").each(function(){

				var slider = $(this).parent().append('<div class="slider"/>');
				slider.attr("id",$(this).data("name"));
				var min = $(this).data("min");
				var max = $(this).data("max");
				var val = $(this).val();
				slider.noUiSlider({
					 range: [min,max]
					,start: val
					,handles: 1
				});

			})
			
			
});