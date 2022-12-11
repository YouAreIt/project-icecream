// core version + navigation, pagination modules:
import Swiper, { Pagination } from 'swiper';
// import Swiper and modules styles
import '~node_modules/swiper/swiper-bundle.min.css';

// init Swiper:
const swiper = new Swiper('.swiper', {
  // configure Swiper to use modules
  modules: [Pagination],

  pagination: {
    el: '.swiper-pagination',
  },
});
