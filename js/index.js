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
  min: 0,
  max: 10,
  start: 5,
  onChange: function(value) {
    $('#display-pricing').html("Cost per month $"");
  }
});

});
