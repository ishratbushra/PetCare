wow = new WOW(
  {
  boxClass:     'wow',      // default
  animateClass: 'animated', // default
  offset:       0,          // default
  mobile:       true,       // default
  live:         true        // default
}
)
wow.init();
$(document).ready(function () {
 
  $('.m1').hover(function () {
    $(this).css("background-color", "#f0de44");
  }, function () {
    $(this).css("background-color", "#53d8c6");
  });
  $(".db").dblclick(function () {
    alert("The paragraph was double-clicked.");
  });
  
});
