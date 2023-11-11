import './modal-success.js';
import { sendData } from './api.js';

const formFilter = document.querySelector('.filter__form');

// Отправка формы фильтра товаров

formFilter.addEventListener('submit', (evt) => {
  evt.preventDefault();
  sendData(new FormData(evt.target));
});
