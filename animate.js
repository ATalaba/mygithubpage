/*$(document).ready(function() {
	$('.hover').hover(function() {
		$('#'+$(this).parent().parent().attr('id')+'more').show(700);
	}, function() {
		$('#'+$(this).parent().parent().attr('id')+'more').hide(700);
	});
})*/
$(document).ready(function() {
	$('.poem').hover(function() {
		$('#'+this.id+'more').show(700);
	}, function() {
		$('#'+this.id+'more').hide(700);
	});
});