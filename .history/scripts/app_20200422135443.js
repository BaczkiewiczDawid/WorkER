const hamburger = document.getElementById('nav__hamburger')
const hamburgerInner = document.querySelector('nav .nav__hamburger .nav__hamburger-box .nav__hamburger-inner');

hamburger.addEventListener('click', () => {
    console.log('adsa');
    hamburgerInner.classList.toggle('hamburger--active');
})