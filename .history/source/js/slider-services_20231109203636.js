import { getSlider } from "./util.js";

const buttons = document.querySelectorAll('.services__button');
const slides = document.querySelectorAll('.slider-services__slide');
const classActiveSlide = 'slider-services__slide--active';
const classActiveButton = 'services__button--active';

// 

getSlider(buttons, slides, classActiveButton, classActiveSlide);
