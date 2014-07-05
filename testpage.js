$(function() {

	$('panel2').mouseover(function(){
		$('panel2').fadeOut('fast', 0.5);
	});

    $('#btn1').click(function(){
		$('.panel1').fadeToggle(300);
	});
});