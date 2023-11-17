"use strict";

var reviewsSwiper = document.querySelector('.swiper-reviews');

if (reviewsSwiper) {
  var swiper = new Swiper('.swiper-reviews', {
    autoHeight: true,
    loop: true,
    pagination: {
      el: '.swiper-pagination',
      clickable: true
    }
  });
}

var useToScroll = document.querySelector('.scroll-menu__link');
useToScroll.addEventListener('click', setScrollTop);

function setScrollTop(top) {
  var intoBlock = document.querySelector('.page__categories');
  intoBlock.scrollIntoView({
    behavior: 'smooth'
  });
}