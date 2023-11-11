import './modal-success.js';



// Отправка формы фильтра товаров

formFilter.addEventListener('submit', (evt) => {
  evt.preventDefault();
  sendData(new FormData(evt.target));
});
