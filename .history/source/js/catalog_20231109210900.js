import './modal-success.js';

const Url = {
  GET: 'https://echo.htmlacademy.ru/',
}

// Отправка формы

const formFilter = document.querySelector('.filter__form');

const sendData = (body) => {
  fetch(Url.)
}

formFilter.addEventListener('submit', (evt) => {
  evt.preventDefault();
  sendData(new FormData(evt.target));
})
