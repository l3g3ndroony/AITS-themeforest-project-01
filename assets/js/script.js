$(document).ready(function() {
	var window_height = $(window).height(),
		navbar_height = $('.navbar-adava').height();

	// HOME HEIGHT
	$( "#home" ).css( "height", window_height);
	// margin-top of index search box
	$( ".home-content" ).css( "margin-top", function() {
		return (window_height - $( ".home-content" ).innerHeight()) /2;
	} );

	//jQuery to collapse the navbar on scroll
	$(window).scroll(function() {
	    if ($(".navbar").offset().top > window_height-navbar_height) {
	        $(".navbar-fixed-top").addClass("navbar-dark");
	    } else {
	        $(".navbar-fixed-top").removeClass("navbar-dark");
	    }
	});

// init Isotope
var $container = $('#isotope').isotope({
  // options
});
// filter items on button click
$('#filters').on( 'click', 'a', function() {
  var filterValue = $(this).attr('data-filter');
  $container.isotope({ filter: filterValue });
});

});