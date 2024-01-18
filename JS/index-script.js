var swiper = new Swiper('.swiper', {
    slidesPerView: 3,
    spaceBetween: 30,
    loop: true,
    direction: getDirection(),
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    on: {
        resize: function () {
            swiper.changeDirection(getDirection());
        },
    },
});

function getDirection() {
    var windowWidth = window.innerWidth;
    var direction = window.innerWidth <= 760 ? 'vertical' : 'horizontal';

    return direction;
};
// Lax.js 動畫
window.onload = function () {
    lax.init()

    lax.addDriver('scrollY', function () {
        return window.scrollY
    });

    lax.addElements('.news', {
        scrollY: {
            translateX: [
              ['elOutY','elCenterY','elInY' ],
              [-1380, 'screenWidth/2', 'screenWidth'],
            ]
          }
          
    })
    
};
// AOS.js 動畫

    AOS.init();
