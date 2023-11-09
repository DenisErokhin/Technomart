import { getSlider } from './util.js';

const slides = document.querySelectorAll('.slider-products__item');
const arrowBack = document.querySelector('.slider-products__arrow--back');
const arrowNext = document.querySelector('.slider-products__arrow--next');
const buttons = document.querySelectorAll('.slider-products__button');
const classActiveSlide = 'slider-products__item--active';
const classActiveButton = 'slider-products__button--active';

// Смена слайдов стрелкой вперед

arrowNext.addEventListener('click', () => {
  const activeSlide = document.querySelector(`.${classActiveSlide}`);

  if (activeSlide === slides[slides.length - 1]) {
    slides[0].classList.add(classActiveSlide);
    activeSlide.classList.remove(classActiveSlide);
    return;
  }

  for (let i = 0; i < slides.length - 1; i++) {

    if(slides[i].classList.contains(classActiveSlide)) {
      const slideActive = slides[i];
      const newSlideActive = slides[i + 1];
      slideActive.classList.remove(classActiveSlide);
      newSlideActive.classList.add(classActiveSlide);
      return;
    }
  }
});

// Смена слайдов стрелкой назад

arrowBack.addEventListener('click', () => {
  const activeSlide = document.querySelector(`.${classActiveSlide}`);

  if (activeSlide === slides[0]) {
    activeSlide.classList.remove(classActiveSlide);
    slides[slides.length - 1].classList.add(classActiveSlide);
    return;
  }

  for (let i = slides.length - 1; i > 0; i--) {
    if(slides[i].classList.contains(classActiveSlide)) {
      const slideActive = slides[i];
      const newSlideActive = slides[i - 1];
      slideActive.classList.remove(classActiveSlide);
      newSlideActive.classList.add(classActiveSlide);
      return;
    }
  }
});

// Слайдер кнопками

getSlider(buttons, slides, classActiveButton, classActiveSlide);

export { slides, buttons, arrowBack, arrowNext }
