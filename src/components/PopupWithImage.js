import { Popup } from "./Popup.js"
import { popupImage, imageTitle } from "../components/index.js"

export class PopupWithImage extends Popup {

  open({ link, name }) {
   imageTitle.textContent = name;
   popupImage.src = link;
   popupImage.alt = `Изображение ${name}`;
   super.open();
  }
}