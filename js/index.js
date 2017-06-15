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
  $('#pricing-slider').range({
  min: 1,
  max: 100,
  start: 3,
  onChange: function(value) {
    $('#display-pricing').html((value*99).toLocaleString() + " $/month");
    $('#display-audience').html((value*100000).toLocaleString());

  }
});

});
