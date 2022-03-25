import { openPopup } from "./utils.js"
import { popupTypeImage, popupImage, imageTitle } from "./index.js"

export class Card {
  constructor (item, cardTemplateSelector) {
    this._item = item;
    this._template = document.querySelector(cardTemplateSelector).content;
  }

  _handleLikeIcon = () => {
    this._likeButton.classList.toggle('elements__group_active')
  };

  _deleteHandler = () => {
    this._cardElement.remove();
  }

  _handlePreviewPicture = () => {
    openPopup(popupTypeImage)
    popupImage.src = this._item.link
    imageTitle.textContent = this._item.name
    popupImage.alt = this._cardText.textContent
  }

  _setEventListeners() {
    cardImage.addEventListener('click', this._handlePreviewPicture)
    deleteButton.addEventListener('click', this._deleteHandler);
    this._likeButton.addEventListener('click', this._handleLikeIcon)
  }

  getCard = () => {
    this._cardElement = this._template.cloneNode(true);
    this._cardImage = this._cardElement.querySelector('.elements__element');
    this._cardText = this._cardElement.querySelector('.elements__text');
    this._deleteButton = this._cardElement.querySelector('.elements__delete-button');
    this._likeButton = this._cardElement.querySelector('.elements__group');
    
    this._cardImage.src = this._item.link
    this._cardText.textContent = this._item.name
    this._cardImage.alt = this._cardText.textContent
  
  this._setEventListeners()
    
      return this._cardElement;
  }
}








// list.prepend(cardElement)