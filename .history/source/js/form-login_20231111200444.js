



formLogin.addEventListener('submit', (evt) => {
  evt.preventDefault();
  sendData(new FormData(evt.target));
  closePopup();
})

export { formLogin };
