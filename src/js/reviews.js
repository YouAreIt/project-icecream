// core version + navigation, pagination modules:
import Swiper, { EffectCreative, Pagination } from 'swiper';
// import Swiper and modules styles

// init Swiper:
const swiper = new Swiper('.reviews__swiper', {
  // configure Swiper to use modules
  modules: [Pagination, EffectCreative],

  grabCursor: true,
  loop: true,
  effect: 'creative',
  centeredSlides: true,

  pagination: {
    el: '.swiper-pagination',
    clickable: true,
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
