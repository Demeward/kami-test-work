
const sliderBlock = document.querySelector('[data-slider]');

const initSlider = () => {
  let swiper;
  if (!sliderBlock) {
    return;
  } else {

    swiper = new Swiper(sliderBlock, {
      effect: 'fade',
      navigation: {
        nextEl: '.slider__control-btn--next',
        prevEl: '.slider__control-btn--prev',
      },
      pagination: {
        el: '.slider__pagination',
        clickable: true,
      },
      slidesPerView: 1,
      loop: true,
      breakpoints: {
        320: {
          allowTouchMove: true,
          grabCursor: true,
        },
        1024: {
          allowTouchMove: false,
          grabCursor: false,
        },
      },
    });
  }
};

export {initSlider};
