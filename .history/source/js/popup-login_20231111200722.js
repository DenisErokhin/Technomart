import { addPopup } from "./popups.js";
import { sendData } from './api.js';
import { closePopup } from './popups.js';

// Открытие попапа логина

contactsButton.addEventListener('click', (evt) => {
  evt.preventDefault();
  addPopup(popupLogin);
})

// Отправка формы логина

formLogin.addEventListener('submit', (evt) => {
  evt.preventDefault();
  sendData(new FormData(evt.target));
  closePopup();
})

export { formLogin, contactsButton};
