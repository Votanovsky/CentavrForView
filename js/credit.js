// Секция меню и навигация
// === меню-бурегр ===
const header = document.querySelector('.section-header');
const mainNavigation = document.getElementById('main-navigation')

document.querySelector('.btn-burger').addEventListener('click', function() { 

    header.classList.toggle('section-header--active-nav');

    if (header.classList.contains('section-header--active-nav')) {
        hideScroll();
    } else {
        showScroll();
    }

});
// === /меню-бурегр ===

// === функция для отключения скролла при активности меню-бургер ===
const getScrollbarWitdth = function() {
    const outer = document.createElement('div');

    outer.style.position = 'absolute';
    outer.style.top = '-9999px';
    outer.style.width = '50px';
    outer.style.height = '50px';
    outer.style.overflow = 'scroll';
    outer.style.visible = 'hidden';

    document.body.appendChild(outer);
    const scrollbarWitdth = outer.offsetWidth - outer.clientWidth;
    document.body.removeChild(outer);

    return scrollbarWitdth;
};
// === /функция для отключения скролла при активности меню-бургер ===

VanillaTilt.init(document.querySelectorAll(".glassmorphism"), {
    max: 25,
    speed: 400,
    glare: true,
    "max-glare": 1
});