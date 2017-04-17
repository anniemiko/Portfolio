var $ = window.jQuery = require('jquery');
var Materialize = require('materialize-css');
require('../../node_modules/materialize-css/js/sideNav.js');
require('../../node_modules/materialize-css/js/parallax.js');

(function($){
  $(function(){

    $('.button-collapse').sideNav();
    $('.parallax').parallax();

    $(document).on('click', '.nav-wrapper a', function(e){
      e.preventDefault();
      $('html, body').animate({
          scrollTop: $( $.attr(this, 'href') ).offset().top
      }, 1000);
    });

  }); // end of document ready
})(jQuery);
