$(document).ready(function () {
  $('.aesthetics__slider').slick({
    initialSlide: 0,
    arrows: true,
    dots: false,
    customPaging : function(slider, i) {
        var thumb = $(slider.$slides[i]).data();
        i++
        return '<a class="dot">'+0+i+'</a>';
                },
    adaptiveHeight: true,
    responsive: true,
    autoplaySpeed: 5000,
    responsive: [
      {
        breakpoint: 770,
        settings: {
          arrows: false,
        }
      }
    ]
  });
});
