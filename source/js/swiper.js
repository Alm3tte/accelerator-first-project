const initSwiper = (Swiper, Navigation) => {
  const swiper = new Swiper('.reviews__swiper', {
    modules: [Navigation],
    spaceBetween: 40,
    loop: false,
    slidesPerView: 1,
    speed: 500,
    mousewheel: true,
    keyboard: true,
    autoheight: true,
    breakpoints: {
      1366: {
        simulateTouch: false
      }
    },

    navigation: {
      nextEl: '.swiper__button--next',
      prevEl: '.swiper__button--prev',
    },
  });
  return swiper.init();
};

export { initSwiper };
