import { sendData } from './api.js';

const formLogin = document.querySelector('.login-form');

formLogin.addEventListener('submit', (evt) => {
  evt.preventDefault();
  sendData(new Form)
})
