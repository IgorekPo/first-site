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

const element = document.getElementById('phone');
const maskOptions = {
  mask: '+38 000 000-00-00',
  lazy: false,
};

const mask = new IMask(element, maskOptions);

let scrollToClock = document.querySelector('.scroll__clock');

scrollToClock.addEventListener('click', setScrollClock);
function setScrollClock(top) {
  let intoBlock = document.querySelector('.reviews__title');
  intoBlock.scrollIntoView({
    behavior: 'smooth',
  });
}

let scrollToWhy = document.querySelector('.scroll__Why');
scrollToWhy.addEventListener('click', setScrollWhy);

function setScrollWhy(top) {
  let intoBlock = document.querySelector('.page__why');
  intoBlock.scrollIntoView({
    behavior: 'smooth',
  });
}

let scrollToBuy = document.querySelector('.scroll__buy');
scrollToBuy.addEventListener('click', setScrollBuy);

function setScrollBuy(top) {
  let intoBlock = document.querySelector('.page__favorite');
  intoBlock.scrollIntoView({
    behavior: 'smooth',
  });
}
