window.addEventListener('DOMContentLoaded', function() {

// Табы юристы ==========================
const tabs = document.querySelectorAll('.card-jurists_name'),
tabsContent = document.querySelectorAll('.card-jurists_people'),
tabsParent = document.querySelector('.name-wrap');

// Скрываем все табы
function hideTabContent() {
tabsContent.forEach(allTab => {
    allTab.classList.add('hide');
    allTab.classList.remove('show','fade');
});

// Убираем класс активности
tabs.forEach(tab => {
    tab.classList.remove('card-jurists_name_active');
});
}

// Показывает табы
function showTabContent(i = 0) {
tabsContent[i].classList.add('show', 'fade');
tabsContent[i].classList.remove('hide');
tabs[i].classList.add('card-jurists_name_active');
}

hideTabContent();
showTabContent();

// Переключает контент по табу
tabsParent.addEventListener('click', (event) => {
const target = event.target;

if (target && target.classList.contains('card-jurists_name')) {
    tabs.forEach((item, i) => {
        if (target == item) {
            hideTabContent();
            showTabContent(i);
        }
    });
}
});
// Табы юристы ==========================


// Аккордеон ==========================
document.querySelector('.faq-accordion').addEventListener('click', (event) => {
	if(event.target.closest('.faq-accordion__item')) {
		event.target.closest('.faq-accordion__item').classList.toggle('faq-accordion__item--active');
	}
});
// /Аккордеон ==========================


// Секция меню и навигация ==========================
// === меню-бурегр ===
const header = document.querySelector('.section-header');

document.querySelector('.btn-burger').addEventListener('click', function() { 

    header.classList.toggle('section-header--active-nav');

    if (header.classList.contains('section-header--active-nav')) {
        document.body.style.overflow = 'hidden';
    } else {
        document.body.style.overflow = '';
    }

});
// === /меню-бурегр === ==========================


// Модальное окно ==========================

const modalTrigger  = document.querySelectorAll('[data-modal]'),
      modal = document.querySelector('.overlay'),
      modalClose = document.querySelector('.modal-close');

modalTrigger.forEach(btn => {
    btn.addEventListener('click', ()=> {
        modal.classList.add('show-modal');
        modal.classList.remove('hide-modal');
        // modal.classList.toggle('show-modal');
        document.body.style.overflow = 'hidden';
    });
});

function closeModal() {
    modal.classList.add('hide-modal');
    modal.classList.remove('show-modal');
    // modal.classList.toggle('show-modal');
    document.body.style.overflow = '';
}

modalClose.addEventListener('click', closeModal); 

modal.addEventListener('click', (e)=> {
    if(e.target === modal) {
        closeModal();
    }
});

document.addEventListener('keydown', (e)=> {
    if (e.code === "Escape" && modal.classList.contains('show-modal')) {
        closeModal();
    }
});

// /Модальное окно =========================



// VANTA.HALO({
//     el: "#section-faq",
//     mouseControls: true,
//     touchControls: true,
//     gyroControls: false,
//     minHeight: 200.00,
//     minWidth: 200.00,
//     backgroundColor: 0xd0f2a,
//     amplitudeFactor: 1.40,
//     size: 1.60
// });


VANTA.GLOBE({
    el: "#section-promo",
    mouseControls: true,
    touchControls: true,
    gyroControls: false,
    minHeight: 200.00,
    minWidth: 200.00,
    scale: 1.00,
    scaleMobile: 1.00,
    color: 0xcf0264,
    size: 1.50,
    backgroundColor: 0x1f1531
});


VanillaTilt.init(document.querySelectorAll(".glassmorphism"), {
    max: 25,
    speed: 400,
    glare: true,
    "max-glare": 1
});

});

