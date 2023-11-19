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
let scrollToBuyTwo = document.querySelector('.actions-main__button');
scrollToBuy.addEventListener('click', setScrollBuy);
scrollToBuyTwo.addEventListener('click', setScrollBuy);

function setScrollBuy(top) {
  let intoBlock = document.querySelector('.page__favorite');
  intoBlock.scrollIntoView({
    behavior: 'smooth',
  });
}

// Telegram -----------------------------------------------------

const TOKEN = '6751340227:AAF92vFtCP3tSMQpAOb2wl9su694SQ9AQoY';
const CHAT_ID = '-1001971108708';
const URI_API = `https://api.telegram.org/bot${TOKEN}/sendMessage`;
const success = document.getElementById('success');
document.querySelector('.form__body').addEventListener('submit', function (e) {
  e.preventDefault();

  let message = `<b>Заказ</b>\n`;
  message += `<b>ПІБ: </b> ${this.nameSurname.value}\n`;
  message += `<b>Місто: </b> ${this.City.value}\n`;
  message += `<b>Телефон: </b> ${this.userphone.value}\n`;
  message += `<b>Нова Пошта: </b> ${this.novaposhta.value}\n`;
  message += `<b>Кількість: </b> ${this.value.value}\n`;
  axios
    .post(URI_API, {
      chat_id: CHAT_ID,
      parse_mode: 'html',
      text: message,
    })
    .then((res) => {
      this.nameSurname.value = '';
      this.City.value = '';
      this.userphone.value = '';
      this.novaposhta.value = '';
      this.value.value = '';
      success.innerHTML = 'Дякую! Замовлення надіслано!';
      success.style.display = 'block';
    })
    .catch((err) => {
      console.warn(err);
    })
    .finelly(() => {
      console.log('All Good');
    });
});
// ---------------------------------------------------------------
