const hamburger = document.querySelector('nav .hamburger');
const nav = document.querySelector('nav .hamburger .navigation');

hamburger.addEventListener('click', () => {
    nav.classList.toggle('navigation--active');
    hamburger.classList.toggle('hamburger--active');
})

const tl = new TimelineMax();
const controller = new ScrollMagic.Controller();

tl.fromTo(".header__title", 1, {y: 100, opacity: 0}, {y: 0, opacity: 1})
tl.fromTo(".header__paragraph", 1, {y: 100, opacity: 0}, {y: 0, opacity: 1}, .2)
tl.fromTo(".header__contact", 1, {y: 100, opacity: 0}, {y: 0, opacity: 1}, .5)
tl.fromTo(".header__read-more", 1, {y: 100, opacity: 0}, {y: 0, opacity: 1}, .5)
tl.fromTo(".header__card", 1, {x: -100, opacity: 0}, {x: 0, opacity: 1}, 1)
