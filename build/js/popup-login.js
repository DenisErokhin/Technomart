import{addPopup}from"./popups.js";import{sendData}from"./api.js";import{closePopup}from"./popups.js";const contactsButton=document.querySelector(".contacts__link"),popupLogin=document.querySelector(".popup-login"),formLogin=document.querySelector(".login-form");contactsButton.addEventListener("click",(o=>{o.preventDefault(),addPopup(popupLogin)})),formLogin.addEventListener("submit",(o=>{o.preventDefault(),sendData(new FormData(o.target)),closePopup()}));export{formLogin,contactsButton};