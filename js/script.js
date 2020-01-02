
// $(window).resize(function() {
//   location.reload();
// });



$(document).ready(function() {


	
	$(".js-mobile-bar").click(function() {

		if($(".js-toggle-menu").is(":visible")) {
			$(".js-toggle-menu").slideUp();
			$('.header__bar-line').removeClass('header__bar-closed')
		} else {
			$(".js-toggle-menu").slideDown();
			$('.header__bar-line').addClass('header__bar-closed')
		}

	});

  
}); //end ready function