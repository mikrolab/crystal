$(document).ready(function () {
    $('.apartment__content-plan').slick({
      initialSlide: 0,
      arrows: true,
      adaptiveHeight: true,
      responsive: true,
      slidesToShow: 2,
      infinite: true,
      slidesToScroll: 1,
      infinite: false,
      responsive: [
        {
          breakpoint: 770,
          settings: {
            slidesToShow: 1,
            arrows: false
          }
        }
      ]
    });
  });
  