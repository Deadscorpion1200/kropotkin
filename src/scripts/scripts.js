import SwiperCore, { Navigation, Pagination, Swiper } from 'swiper/core';

// configure Swiper to use modules
SwiperCore.use([Navigation, Pagination]);

const swiper = new Swiper('.swiper-container', {
  direction: 'horizontal',
  loop: true,
  touchRatio: 0.2,
  slideToClickedSlide: true,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  autoplay: 
  {
    delay: 2000,
  },
});