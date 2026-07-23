// Вся логика сайдбара тут
const menuBtn = document.querySelector('.menu');
const aside = document.querySelector('aside');
const closeBtn = document.querySelector('.close__btn');
const overlay = document.querySelector('.sidebar-overlay');

export function initSidebar() {
    menuBtn.addEventListener('click', () => {
        aside.classList.add('open');
        overlay.classList.add('active');
    });

    function closeSidebar() {
        aside.classList.remove('open');
        overlay.classList.remove('active');
    }

    closeBtn.addEventListener('click', closeSidebar);
    overlay.addEventListener('click', closeSidebar);
}