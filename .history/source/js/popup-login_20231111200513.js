import { addPopup } from "./popups.js";
import { sendData } from './api.js';
import { closePopup } from './popups.js';

// Открытие попапа логина

const contactsButton = document.querySelector('.contacts__link');
const popupLogin = document.querySelector('.popup-login');
const formLogin = document.querySelector('.login-form');

contactsButton.addEventListener('click', (evt) => {
  evt.preventDefault();
  addPopup(popupLogin);
})

// Отправка формы логина

export { contactsButton };
