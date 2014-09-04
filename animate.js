$(document).ready(function() {
	$('#openthepage').click(function() {
		$('#openthepage').animate({
			bottom: 1000,
			opacity: 0.5
		}, 2000, function(){})
		$('img#openthepage').animate({
			bottom: 1000,
			opacity: 0.5
		}, 2000, function(){})
	});
});