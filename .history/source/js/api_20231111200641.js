const Url = {
  POST: 'https://echo.htmlacademy.ru/',
};

const sendData = (body) => {
  fetch(Url.POST,
    {
      method: 'POST',
      body,
    })
    .then((response) => {
      location.reload();
    })
};

export { sendData };
