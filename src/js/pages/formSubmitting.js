$(".contact__form").submit(function (e) {
  e.preventDefault();
  var form_data = {
    "name": $(this).find("input[name='name']").val(),
    "phone": $(this).find("input[name='phone']").val(),
    "message": $(this).find("textarea[name='message']").val()
  }
  $.ajax({
    type: "POST",
    url: "https://crystal-api.id-c.com.ua/api/feedback",
    data: form_data,
    success: function () {
      $('.successfully__sent-wrapper').css('visibility', 'visible');
      $('.successfully__sent-wrapper').css('opacity', '1');
      $('.popup__wrapper').css('visibility', 'hidden');
      $('.popup__wrapper').css('opacity', '0');
      $('html').css('overflow', 'hidden');
      $('.contact__form')[0].reset();
    }
  });
});
