
(function($) {
    "use strict";
     $(document).on('ready', function() {
	
        jQuery(window).on('scroll', function() {
			if ($(this).scrollTop() > 200) {
				$('#header .header-inner').addClass("sticky");
			} else {
				$('#header .header-inner').removeClass("sticky");
			}
		});
		
		/*====================================
			Mobile Menu
		======================================*/ 	
		$('.menu').slicknav({
			prependTo:".mobile-nav",
			duration: 300,
			closeOnClick:true,
		});
		
	
		/*===================
			Scroll Up JS
		=====================*/
		$.scrollUp({
			scrollText: '<span><i class="fa fa-angle-up"></i></span>',
			easingType: 'easeInOutExpo',
			scrollSpeed: 900,
			animation: 'fade'
		}); 

		/*=======================
			Animate Scroll JS
		=========================*/
		$('.scroll').on("click", function (e) {
			var anchor = $(this);
				$('html, body').stop().animate({
					scrollTop: $(anchor.attr('href')).offset().top - 100
				}, 1000);
			e.preventDefault();
		});
		
		/*=======================
			Stellar JS
		=========================*/
		$.stellar({
		  horizontalOffset: 0,
		  verticalOffset: 0
		});

		
	});
	
	/*====================
		Preloader JS
	======================*/
	$(window).on('load', function() {
		$('.preloader').addClass('preloader-deactivate');
	});
	
	
})(jQuery);
