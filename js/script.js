const reviewsSwiper = document.querySelector('.swiper-reviews');

if (reviewsSwiper) {
  const swiper = new Swiper('.swiper-reviews', {
    autoHeight: true,
    loop: true,

    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
  });
}

let useToScroll = document.querySelector('.scroll-menu__link');

useToScroll.addEventListener('click', setScrollTop);

function setScrollTop(top) {
  let intoBlock = document.querySelector('.page__categories');
  intoBlock.scrollIntoView({
    behavior: 'smooth',
  });
}

const element = document.getElementById('phone');
const maskOptions = {
  mask: '+38 000 000-00-00',
  lazy: false,
};
const mask = new IMask(element, maskOptions);
