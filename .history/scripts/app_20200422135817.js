const hamburger = document.getElementById('nav__hamburger');
const nav = document.querySelector('nav .nav__hamburger .nav__hamburger-navigation')
const hamburgerInner = document.querySelectorAll('nav .nav__hamburger .nav__hamburger-box .nav__hamburger-inner');

hamburger.addEventListener('click', () => {
    hamburgerInner.forEach(hamburgerInnerOne => {
        hamburgerInnerOne.classList.toggle('hamburger--active');
    });
});