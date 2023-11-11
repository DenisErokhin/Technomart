import './modal-success.js';

const Url = {
  POST: 'https://echo.htmlacademy.ru/',
}

// Отправка формы

const formFilter = document.querySelector('.filter__form');

const sendData = (body) => {
  fetch(Url.POST,
    {
      method: 'POST',
      body,
    })
    .then((response) => {
      location.reload ();
    })
}

formFilter.addEventListener('submit', (evt) => {
  evt.preventDefault();
  sendData(new FormData(evt.target));
})
