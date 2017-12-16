



//UI
$(document).ready(function(){
  $('.expand-btn').click(function(){
    $('.hidden-menu').toggleClass('menu-show');
    $('.expand-btn').toggleClass('close-btn');
  });

  $('.send-animation').click(function(){
      $('.send').toggleClass('sent');
      $('#clicky').toggleClass('no-click');
  });

});
