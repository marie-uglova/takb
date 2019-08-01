$(document).ready(function() {
	
	$('.header-burger').click(function(){
		$('.header-menu').toggleClass('act');
		$('.mobile-menu').toggleClass('act');
		return false;
	});
	$('.search-call,.close-me').click(function(){
		$('.search-block').toggleClass('active');
		return false;
	});
	$('.colorbox').colorbox({rel:'gal'});
	jQuery.colorbox.settings.maxWidth  = '95%';
	jQuery.colorbox.settings.maxHeight = '95%';
	var resizeTimer;
	function resizeColorBox()
	{
		if (resizeTimer) clearTimeout(resizeTimer);
		resizeTimer = setTimeout(function() {
				if (jQuery('#cboxOverlay').is(':visible')) {
						jQuery.colorbox.load(true);
				}
		}, 300);
	}
	jQuery(window).resize(resizeColorBox);
	window.addEventListener("orientationchange", resizeColorBox, false);
	
});