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

  // Set custom step

 pricings= [
 null,
 "99",
 "149",
 "499",
 "999",
 "1,499",
 "2,499",
 "4,999",
 ]
 audiences= [
 null,
 "10,000",
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
  step: 7,
  onChange: function(value) {
    $('#display-pricing').html(pricings[value]);
    $('#display-audience').html(audiences[value]);
  }
  });
});
