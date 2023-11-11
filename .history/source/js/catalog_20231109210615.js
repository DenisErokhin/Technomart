import './modal-success.js';

// Отправка формы

const formFilter = document.querySelector('.filter__form');

const sendData = ()

formFilter.addEventListener('submit', (evt) => {
  evt.preventDefault();
  sendData(new FormData(evt.target));
})
