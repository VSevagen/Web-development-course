$("input").on("keypress", function(e){
	if(e.which == 13){
		var input = $(this).val();
		$(this).val("");
		$("ul").append("<li><span><i class='fas fa-trash-alt'></i></span>"+input+"</li>");
	}
})

$("ul").on("click","li", function(){
	$(this).toggleClass("change")
})

$("ul").on("click","span", function(e) {
	$(this).parent().fadeOut(function() {
		$(this).remove();
	});
	e.stopPropagation();
})	

$("i").on("click", function() {
	$("input").fadeToggle();	
})