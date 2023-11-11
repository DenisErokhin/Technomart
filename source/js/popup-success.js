import { addPopup, closePopup } from "./popups.js";

const buttonsBuy = document.querySelectorAll('.goods__button--buy');
const popupSuccess = document.querySelector('.popup-success');
const buttonContinue = document.querySelector('.popup-success__button-continue');
const cart = document.querySelector('.page-header__cart');
const bookmarks = document.querySelector('.page-header__bookmarks');
const buttonsBookmarks = document.querySelectorAll('.goods__button--bookmarks');
const addValue = 1;

// Отображение добавления товара в корзину и закладки

const checkClass = (item) => {
  if(item === cart && !item.classList.contains('cart--active')) {
    return item.classList.add('cart--active');
  }

  if(item === bookmarks && !item.classList.contains('bookmarks--active')) {
    return item.classList.add('bookmarks--active');
  }
};

const addProduct = (item) => {
  const array = item.textContent.split(' ');
  const lastIndex = array.length - 1;
  const newElement = +array[lastIndex] + addValue;
  array[lastIndex] = newElement;
  item.textContent = array.join(' ');
  checkClass(item);
};

// Попап успешного добавления в корзину

const closeButtonContinue = () => {
  buttonContinue.removeEventListener('click', closeButtonContinue);
  closePopup();
};

buttonsBookmarks.forEach((button) => {
  button.addEventListener('click', () => {
     addProduct(bookmarks);
  })
});

buttonsBuy.forEach((button) => {
  button.addEventListener('click', () => {
    addPopup(popupSuccess);
    addProduct(cart);
    buttonContinue.addEventListener('click', closeButtonContinue);
  })
});

export { buttonsBuy };
