var scroll_flag = scroll_flag || true;

$(document).ready(function(){
	$(document).scroll(function(event){
		if ($(document).scrollTop() >= 80){
			if (scroll_flag){
				$('#nav-brand-text').stop(true, true).animate({"font-size": "20px"}, 300);
				$('#nav-brand').stop(true, true).animate({
					"margin-top": "5px",
					"margin-bottom": "5px",
				}, 300);
				$('#nav-tabs').stop(true, true).animate({"margin-top": "8px"}, 300);
				scroll_flag = false;
			}
		}
		else if ($(document).scrollTop() <= 10){
			if (!scroll_flag){
				$('#nav-brand-text').stop(true, true).animate({"font-size": "25px"}, 300);
				$('#nav-brand').stop(true, true).animate({
					"margin-top": "15px",
					"margin-bottom": "15px",
				}, 300);
				$('#nav-tabs').stop(true, true).animate({"margin-top": "21px"}, 300);
				scroll_flag = true;
			}
		}
	});
});