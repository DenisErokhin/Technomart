import { addPopup } from "./modal-general.js";

const contactsButton = document.querySelector('.contacts__link');
const popupLogin = document.querySelector('.popup-login');

contactsButton.addEventListener('click', (evt) => {
  evt.preventDefault();
  addPopup(popupLogin);
})

export { contactsButton };
