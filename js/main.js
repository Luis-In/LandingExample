window.onload=function() {
    document.querySelector('.menu-btn').addEventListener('click', navbar)
}

function navbar() {
    document.querySelector('.nav-menu').classList.toggle('show');
}

ScrollReveal().reveal('.showcase');
ScrollReveal().reveal('.news-cards', { delay: 500 });
ScrollReveal().reveal('.cards-banner-one', { delay: 500 });
ScrollReveal().reveal('.cards-banner-two', { delay: 500 });