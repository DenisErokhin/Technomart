import './modal-success.js';



// Отправка формы фильтра

const formFilter = document.querySelector('.filter__form');

formFilter.addEventListener('submit', (evt) => {
  evt.preventDefault();
  sendData(new FormData(evt.target));
});
