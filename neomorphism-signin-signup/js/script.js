$(document).ready(function () {
  
  var speed = 600;
  $("#signin-html").hide(50);

  $('#sign-up').click(function () {
    $('#login-html').animate({left:'740px'}, 'slow', function(){
      $(this).removeAttr('style').hide();
    });

    $("#signin-html").show(speed);
    console.log('Slidinggggg...');
  });

  $('#back-to-login').click(function () {
    $('#signin-html').animate({left:'740px'}, 'slow', function(){
      $(this).removeAttr('style').hide();
    });
    $("#login-html").show(speed);
    console.log('Slidinggggg...');
  });
});
