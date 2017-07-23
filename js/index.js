$(document).ready(function(){

  $('.topnav.sidebar').first()
   .sidebar('attach events', '.toggle.button')
  ;
  $('.toggle.button')
   .removeClass('disabled')
  ;


  $("[data-popup]").each(function(_, item){
    item = $(item);
    item.popup({
      popup: "#" + item.data("popup"),
      exclusive: true,
      hoverable: true,
      lastResort: "bottom left"
    });
  });


  semantic.embed = {};

  // ready event
  semantic.embed.ready = function() {

    // selector cache
    var
      // alias
      $myfavesEmbed = $('.example').eq(0).find('iframe'),
      handler
    ;

    // event handlers
    handler = {

    };

    $('.embed.example .ui.embed')
      .embed()
    ;
    $('.existing.code .embed').removeClass('embed').addClass('ui embed');


  };


  // Set custom step

 pricings= [
 null,
 "0",
 "499",
 "999",
 "1499",
 "2,499",
 "4,499",
 "8,999",
 ]
 audiences= [
 null,
 "0",
 "100,000",
 "1,000,000",
 "2,000,000",
 "3,000,000",
 "5,000,000",
 "10,000,000",
 ]
 $('#pricing-slider').range({
  min: 1,
  max: 7,
  start: 3,
  step: 1,
  onChange: function(value) {
    $('#display-pricing').html(pricings[value]);
    $('#display-audience').html(audiences[value]);
  }
  });

  $('.overlay').visibility({
  type: 'fixed',
  offset: 80
});

});
