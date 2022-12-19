import Swiper, { EffectCreative, Autoplay } from 'swiper';

const swiper = new Swiper('.gallery__swiper', {
  modules: [EffectCreative, Autoplay],
  slidesPerView: 1,
  spaceBetween: 10,

  mousewheel: true,
  keyboard: true,
  effect: 'creative',
  centeredSlidesBounds: true,
  loop: true,
  speed: 800,
  autoplay: {
    duration: 2000,
  },

  creativeEffect: {
    prev: {
      translate: ['-120%', 0, -450],
    },
    next: {
      translate: ['120%', 0, -450],
    },
  },
});
