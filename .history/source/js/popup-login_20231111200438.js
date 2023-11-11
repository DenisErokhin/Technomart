import { addPopup } from "./popups.js";
import { sendData } from './api.js';
import { closePopup } from './popups.js';

// Открытие попапа логина

const contactsButton = document.querySelector('.contacts__link');
const popupLogin = document.querySelector('.popup-login');

contactsButton.addEventListener('click', (evt) => {
  evt.preventDefault();
  addPopup(popupLogin);
})

export { contactsButton };
