const hamburger = document.querySelector('nav .hamburger');
const nav = document.querySelector('nav .hamburger .navigation');

hamburger.addEventListener('click', () => {
    nav.classList.toggle('navigation--active');
    console.log('hello !')
})