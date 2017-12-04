/*
--- Custom JS ---
*/

$(function() {

  $('a.nav-li').click(function(e) {
  		e.preventDefault();
  	});

  	$('a.nav-li').popover();

});
