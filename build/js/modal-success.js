import{addPopup,closePopup}from"./modal-general.js";const buttonsBuy=document.querySelectorAll(".goods__button--buy"),popupSuccess=document.querySelector(".popup-success"),buttonContinue=document.querySelector(".popup-success__button-continue"),cart=document.querySelector(".page-header__cart"),bookmarks=document.querySelector(".page-header__bookmarks"),buttonsBookmarks=document.querySelectorAll(".goods__button--bookmarks"),addValue=1,checkClass=t=>t!==cart||t.classList.contains("cart--active")?t!==bookmarks||t.classList.contains("bookmarks--active")?void 0:t.classList.add("bookmarks--active"):t.classList.add("cart--active"),addProduct=t=>{const o=t.textContent.split(" "),e=o.length-1,c=+o[e]+1;o[e]=c,t.textContent=o.join(" "),checkClass(t)},closeButtonContinue=()=>{buttonContinue.removeEventListener("click",closeButtonContinue),closePopup()};buttonsBookmarks.forEach((t=>{t.addEventListener("click",(()=>{addProduct(bookmarks)}))})),buttonsBuy.forEach((t=>{t.addEventListener("click",(()=>{addPopup(popupSuccess),addProduct(cart),buttonContinue.addEventListener("click",closeButtonContinue)}))}));export{buttonsBuy};