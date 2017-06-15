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
 "U999",
 "1,499",
 "$2,499",
 "$4,999",
]
$('#pricing-slider').range({
  min: 1,
  max: 7,
  start: 3,
  step: 7,
  onChange: function(value) {
    $('#display-pricing').html(pricings[value]);
    $('#display-audience').html((value*100000).toLocaleString());
 }


});
