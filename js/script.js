$('.slider-for').slick({
    slidesToShow: 3,
    prevArrow: "<img src='img/arrow_left.svg' class='slick-prev' alt='1'>",
    nextArrow: "<img src='img/arrow_right.svg' class='slick-next' alt='2'>",
    responsive: [
        {
            breakpoint: 992,
            settings: {
            arrows: false,
            centerPadding: '40px',
            slidesToShow: 2
            }
        },
        {
            breakpoint: 768,
            settings: {
            arrows: false,
            centerPadding: '40px',
            slidesToShow: 1
        }
        },
        {
            breakpoint: 320,
            settings: {
            arrows: false,
            centerPadding: '40px',
            slidesToShow: 1
        }
      }
    ]
  });
