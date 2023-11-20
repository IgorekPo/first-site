// SWIPER ------------------------------------------------------

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
  mask: Number,
  lazy: false,
};

const mask = new IMask(element, maskOptions);
// ---------------------------------------------------------------

// SCROLL TO -----------------------------------------------------

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

let scrollToFeature = document.querySelector('.scroll__buy');
scrollToFeature.addEventListener('click', setScrollFeature);

function setScrollFeature(top) {
  let intoBlock = document.querySelector('.page__feature');
  intoBlock.scrollIntoView({
    behavior: 'smooth',
  });
}
let scrollToBuy = document.querySelector('.actions-main__button');
scrollToBuy.addEventListener('click', setScrollBuy);
function setScrollBuy(top) {
  let intoBlock = document.querySelector('.page__favorite');
  intoBlock.scrollIntoView({
    behavior: 'smooth',
  });
}

// ---------------------------------------------------------------

// ----Full Information in FORM-----------------------------------------------------------

document.addEventListener('DOMContentLoaded', function () {
  const form = document.getElementById('form');
  form.addEventListener('submit', formSend);

  async function formSend(eventner) {
    eventner.preventDefault();

    let error = formValidate(form);
  }

  function formValidate(form) {
    let error = 0;
    let formReq = document.querySelectorAll('._req');
    for (let index = 0; index < formReq.length; index++) {
      const input = formReq[index];
      formRemoveError(input);

      if (input.value === '' || validatePhone(phone) == Number) {
        formAddError(input);
        error++;
      }
    }
  }
  function formAddError(input) {
    input.parentElement.classList.add('_error');
    input.classList.add('_error');
  }
  function formRemoveError(input) {
    input.parentElement.classList.remove('_error');
    input.classList.remove('_error');
  }
  function validatePhone(phone) {
    let re = /^[0-9\s]*$/;
    re.test(Number);
  }
});
// ---------------------------------------------------------------

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
      this.value.value = '1';
      success.innerHTML = 'Дякую! Замовлення отримано!';
      success.style.display = 'block';
    })
    .catch((err) => {
      console.log(err);
    });
});
// ---------------------------------------------------------------

// ---------------Total Value------------------------------------------------
let select = document.getElementById('select-velue');

select.addEventListener('change', function () {
  let getValue = this.value;
  let totalPay = document.querySelector('.value-price');
  let showPay = getValue * 1200;
  totalPay.innerHTML = 1200;
  totalPay.innerHTML = `${showPay}`;
  console.log(showPay);
});

// ---------------------------------------------------------------
