$(document).ready(function () {
  $("#home_button").click(function() {
      $('html, body').animate({
          scrollTop: 0
      }, 500);

  });
  $("#about_button").click(function() {
      $('html, body').animate({
          scrollTop: $("#about").offset().top
      }, 500);

  });
  $("#menu_button").click(function() {
      $('html, body').animate({
          scrollTop: $("#menu").offset().top
      }, 500);
  });
  $("#contact_button").click(function() {
      $('html, body').animate({
          scrollTop: $("#contact").offset().top
      }, 500);
  });
  $('.carousel').carousel({
  	interval: 6000,
  	pause:"false"
  });




  function loadApp() {

  	$('.flipbook').turn({
  				width:922,
  				height:600,
  				elevation: 50,
  				gradients: true,
  				autoCenter: true

  	});
  }

  // Load the HTML4 version if there's not CSS transform

  yepnope
  			({
  	test : Modernizr.csstransforms,

  				yep: ['../../lib/turn.js'],

  				nope: ['../../lib/turn.html4.min.js'],

  				both: ['css/basic.css'],

  				complete: loadApp
  });


});
