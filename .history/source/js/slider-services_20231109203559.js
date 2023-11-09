import { getSlider } from "./util.js";

const buttons = document.querySelectorAll('.services__button');
const slides = document.querySelectorAll('.slider-services__slide');
const classActiveSlide = 'slider-services__slide--active';
const classActiveButton = 'services__button--active';

getSlider(buttons, slides, classActiveButton, classActiveSlide);

// buttons.forEach((button, index) => {
//   button.addEventListener('click', () => {
//     const buttonActive = document.querySelector(`.${classActiveButton}`);
//     const slideActive = document.querySelector(`.${classActiveSlide}`);
//     buttonActive.classList.remove(classActiveButton);
//     slideActive.classList.remove(classActiveSlide);
//     button.classList.add(classActiveButton);
//     slides[index].classList.add(classActiveSlide);
//   })
// });

export {buttons, slides}
