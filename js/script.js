
const reviewsSwiper = document.querySelector('.swiper-reviews');

if(reviewsSwiper){
    const swiper = new Swiper('.swiper-reviews', {
        autoHeight: true, 
        loop: true,
    
        pagination: {
        el: '.swiper-pagination',
        clickable: true
        },
    });
}


let useToScroll = document.querySelector ('.scroll-menu__link');

useToScroll.addEventListener ('click', setScrollTop);

function setScrollTop (top){
    let intoBlock = document.querySelector ('.page__categories');
    intoBlock.scrollIntoView({
        behavior: 'smooth'
    })
}


