import { isEscEvent } from "./util.js";

// Общие стили для открытия и закрытия попапов

const classActive = 'popup--active';

const closePopupEsc = (evt) => {
  if(isEscEvent(evt)) {
    evt.preventDefault();
    closePopup();
  }
}

const closePopup = () => {
  const popupActive = document.querySelector(`.${classActive}`);
  const buttonClose = popupActive.querySelector('.popup__button-close');
  popupActive.classList.remove(classActive);
  buttonClose.removeEventListener('click', closePopup);
}

const addPopup = (popup) => {
  popup.classList.add(classActive);
  const buttonClose = popup.querySelector('.popup__button-close');
  buttonClose.addEventListener('click', closePopup);
  document.addEventListener('keydown', closePopupEsc);
};

export { addPopup, closePopup };
