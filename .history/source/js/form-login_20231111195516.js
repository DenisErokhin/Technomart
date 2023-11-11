import { sendData } from './api.js';
import { closePopup } from './modal-general.js';

const formLogin = document.querySelector('.login-form');

formLogin.addEventListener('submit', (evt) => {
  evt.preventDefault();
  sendData(new FormData(evt.target));
  close
})
