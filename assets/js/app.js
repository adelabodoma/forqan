jQuery(document).ready(function ($) {
    const swiper = new Swiper(".header__swiper", {
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

      const statisticsSwiper = new Swiper(".statistics__swiper", {
        slidesPerView: 4,
        spaceBetween: 30,
        navigation: {
          nextEl: ".statistics__swiper .swiper-button-next",
          prevEl: ".statistics__swiper .swiper-button-prev",
        },
      });

      const ProgramSwiper = new Swiper(".program__swiper", {
        slidesPerView: 4,
        spaceBetween: 30,
        navigation: {
          nextEl: ".program__controls .swiper-button-next",
          prevEl: ".program__controls .swiper-button-prev",
        },
      });

      const activitiesSwiper = new Swiper(".activities__swiper", {
        slidesPerView: 3,
        spaceBetween: 30,
        navigation: {
          nextEl: ".activities__controls .swiper-button-next",
          prevEl: ".activities__controls .swiper-button-prev",
        },
      });

      const testimonialSwiper = new Swiper(".testimonial__swiper", {
        slidesPerView: 2,
        spaceBetween: 30,
        navigation: {
          nextEl: ".testimonial__controls .swiper-button-next",
          prevEl: ".testimonial__controls .swiper-button-prev",
        },
      });
      
      const twitterSwiper = new Swiper(".twitter-widget__swiper", {
        slidesPerView: 1,
        spaceBetween: 30,
        pagination: {
          el: ".twitter-widget__controls .swiper-pagination",
          clickable: true,
        },
        navigation: {
          nextEl: ".twitter-widget__controls .swiper-button-next",
          prevEl: ".twitter-widget__controls .swiper-button-prev",
        },
      });
});    

