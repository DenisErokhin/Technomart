import './modal-success.js';
import './modal-map.js';
import './modal-login.js';
import './slider-products.js';

const buttonsServices = document.querySelectorAll('.services__button');
const slidesServices = document.querySelectorAll('.slider-services__slide');

buttonsServisec.forEach((button, index) => {
  button.addEventListener('click', () => {
    const buttonActive = document.querySelector(`.${classActiveButton}`);
    const slideActive = document.querySelector(`.${classActiveSlide}`);
    buttonActive.classList.remove(classActiveButton);
    slideActive.classList.remove(classActiveSlide);
    button.classList.add(classActiveButton);
    slides[index].classList.add(classActiveSlide);
  })
});

export { slides, buttons, arrowBack, arrowNext }
