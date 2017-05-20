$(document).ready(function(){

  $('.left.demo.sidebar').first()
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


});
