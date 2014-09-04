$(document).ready(function() {
	$('.poem').hover(function() {
		$('#'+this.id+'more').show(700);
	}, function() {
		$('#'+this.id+'more').hide(700);
	});
});