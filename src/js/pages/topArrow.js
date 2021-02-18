$(function () {$('#topBtn').fadeOut(1);
  $(window).scroll(function () {
    if ($(this).scrollTop() > 500) {
      $('#topBtn').fadeIn();
    } else {
      $('#topBtn').fadeOut();
    }
  });
  $('#topBtn').click(function () {
    $('body,html').animate({
      scrollTop: 0
    }, 700);
  });
});
