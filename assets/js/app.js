jQuery(document).ready(function ($) {
    var swiper = new Swiper(".header__swiper", {
        slidesPerView: 1,
        spaceBetween: 30,
        loop: true,
        pagination: {
          el: ".header__swiper .swiper-pagination",
          clickable: true,
        },
        navigation: {
          nextEl: ".header__swiper .swiper-button-next",
          prevEl: ".header__swiper .swiper-button-prev",
        },
      });

      var statisticsSwiper = new Swiper(".statistics__swiper", {
        slidesPerView: 4,
        spaceBetween: 30,
        navigation: {
          nextEl: ".statistics__swiper .swiper-button-next",
          prevEl: ".statistics__swiper .swiper-button-prev",
        },
      });

      var ProgramSwiper = new Swiper(".program__swiper", {
        slidesPerView: 4,
        spaceBetween: 30,
        navigation: {
          nextEl: ".program__controls .swiper-button-next",
          prevEl: ".program__controls .swiper-button-prev",
        },
      });
});    

