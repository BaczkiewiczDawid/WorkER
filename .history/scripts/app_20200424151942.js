const hamburger = document.querySelector('nav .hamburger');
const nav = document.querySelector('nav .hamburger .navigation');

hamburger.addEventListener('click', () => {
    nav.classList.toggle('navigation--active');
    hamburger.classList.toggle('hamburger--active');
})

const tl = new TimelineMax();

//nav

tl.fromTo(".navigation__logo", 1, {y: -100, opacity: 0}, {y: 0, opacity: 1})
tl.fromTo(".hamburger__inner", 1, {y: -100, opacity: 0}, {y: 0, opacity: 1}, 0)

//header

tl.fromTo(".header__title", 1, {y: 100, opacity: 0}, {y: 0, opacity: 1}, 0)
tl.fromTo(".header__paragraph", 1, {y: 100, opacity: 0}, {y: 0, opacity: 1}, .2)
tl.fromTo(".header__contact", 1, {y: 100, opacity: 0}, {y: 0, opacity: 1}, .5)
tl.fromTo(".header__read-more", 1, {y: 100, opacity: 0}, {y: 0, opacity: 1}, .5)
tl.fromTo(".header__card", 1, {x: -100, opacity: 0}, {x: 0, opacity: 1}, .5)

const sectionTl = new TimelineMax();
const controller = new ScrollMagic.Controller();

sectionTl.fromTo(".section__title", 1, {y: 100, opacity: 0}, {y: 0, opacity: 1}, 0)
sectionTl.fromTo(".section__images", 1, {y: 100, opacity: 0}, {y: 0, opacity: 1}, .3)
sectionTl.fromTo(".section__paragraph", 1, {y: 100, opacity: 0}, {y: 0, opacity: 1}, .5)

let sectionScene = new ScrollMagic.Scene({
    triggerElement: ".section__title",
})

.setTween(sectionTl).addTo(controller);

const articleTl = new TimelineMax();
const articleController = new ScrollMagic.Controller();

articleTl.fromTo(".article__title", 1, {y: 100, opacity: 0}, {y: 0, opacity: 1})
articleTl.fromTo(".article__paragraph-one", 1, {y: 100, opacity: 0}, {y: 0, opacity: 1}, .5)
articleTl.fromTo(".article__paragraph-two", 1, {y: 100, opacity: 0}, {y: 0, opacity: 1}, .7)
articleTl.fromTo(".article__image", 1, {x: 50, opacity: 0}, {x: 0, opacity: 1}, 1)

let articleScene = new ScrollMagic.Scene({
    triggerElement: ".section__paragraph",
})

.setTween(articleTl).addTo(articleController);
