import './modal-success.js';

const URL

// Отправка формы

const formFilter = document.querySelector('.filter__form');

const sendData = (body) => {

}

formFilter.addEventListener('submit', (evt) => {
  evt.preventDefault();
  sendData(new FormData(evt.target));
})