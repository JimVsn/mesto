import { Popup } from "./Popup.js";

export class PopupWithImage extends Popup {
  constructor(popupSelector) {
    super(popupSelector)
    this._popupImage = this._popup.querySelector(".popup__image")
    this._imageTitle = this._popup.querySelector(".popup__image-title")
  }
  open({ link, name }) {
    this._imageTitle.textContent = name;
    this._popupImage.src = link;
    this._popupImage.alt = `Изображение ${name}`;
    super.open();
  }
}
