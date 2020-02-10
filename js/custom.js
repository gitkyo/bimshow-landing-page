(function($) {
	'use strict';
	/*
	tooltip
	=========================== */
	$('.tooltips').tooltip({
		selector: "a[data-toggle^=tooltip]"
	})	

	/* Client logo hover
	=========================== */	
	$(".logo-hover").css({'opacity':'0','filter':'alpha(opacity=0)'});	
	$('.client-link').hover(function(){
				$(this).find('.logo-hover').stop().fadeTo(900, 1);
				$(this).find('.client-logo').stop().fadeTo(900, 0);
	}, function() {
				$(this).find('.logo-hover').stop().fadeTo(900, 0);
				$(this).find('.client-logo').stop().fadeTo(900, 1);
	});	

	
	
	
	baguetteBox.run('.gallery');

	if( mobilecheck() ){  
		$('.navbar-collapse li a').click(function(event) {
			/* Act on the event */		
			$("button.navbar-toggle").trigger('click');

		});
	}


	/* gellerie lightbox effect
	=========================== */	
	// View an image
	//const viewer = new Viewer(document.getElementById('image'));

	// View a list of images
	//const gallery = new Viewer(document.getElementById('images'));




})(jQuery);