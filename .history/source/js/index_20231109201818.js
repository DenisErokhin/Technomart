import './modal-success.js';
import './modal-map.js';
import './modal-login.js';
import './slider-products.js';
import './slider-services.js';

const getSliderButtons = (buttons, slides, classActiveButton, classActiveSlide) => {
  buttons.forEach((button, index) => {
    button.addEventListener('click', () => {
      const buttonActive = document.querySelector(`.${classActiveButton}`);
      const slideActive = document.querySelector(`.${classActiveSlide}`);
      buttonActive.classList.remove(classActiveButton);
      slideActive.classList.remove(classActiveSlide);
      button.classList.add(classActiveButton);
      slides[index].classList.add(classActiveSlide);
    })
  });
}

export { getSliderButtons}
