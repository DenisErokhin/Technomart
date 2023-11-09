// Проверка на нажатие кнопки Esc

const isEscEvent = (evt) => evt.keyCode === 27;

export { isEscEvent };

// Получение слайдера

const getSlider = (buttons, slides, classActiveButton, classActiveSlide) => {
  buttons.forEach((button, index) => {
    button.addEventListener('click', () => {
      const buttonActive = document.querySelector(`.${classActiveButton}`);
      const slideActive = document.querySelector(`.${classActiveSlide}`);
      buttonActive.classList.remove(classActiveButton);
      slideActive.classList.remove(classActiveSlide);
      button.classList.add(classActiveButton);
      slides[index].classList.add(classActiveSlide);
    })
  })
};
