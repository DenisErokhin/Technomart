import { addPopup } from "./modal-general.js";
const mapContainer = document.querySelector('.contacts__map-container');
const popupMap = document.querySelector('.popup-map');

mapContainer.addEventListener('click', () => {
  addPopup(popupMap);
});

export { mapContainer };
