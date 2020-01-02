
window.addEventListener('resize', function () {
  viewportWidth = window.innerWidth || document.documentElement.clientWidth;
  if (viewportWidth < 1025) {
    location.reload();
  }
}, false);



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