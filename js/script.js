$(document).ready(function(){
    $(".owl-carousel").owlCarousel({
        items: 2,
        speed: 800,
        autoplay: true,
        autoplaySpeed: 700,
        loop: true,
        slideBy: 2,
        responsiveClass: true,
    responsive: {
      0: {
        items: 1,
        autoWidth: false,
        nav: true,
        dots: false,
      },
      768: {
        autoWidth: false,
      }
    }

    });
  });

