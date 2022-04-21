export class Card  {
  constructor ({item, handleCardClick},  cardTemplateSelector) {
    this._item = item;
    this._template = document.querySelector(cardTemplateSelector).content;
    this._handleCardClick = handleCardClick;
  }

  _handleLikeIcon = () => {
    this._likeButton.classList.toggle('elements__group_active')
  }

  _deleteHandler () {
    this._cardElement.remove() 
    this._cardElement = null
  }

  getCard = () => {
    this._cardElement = this._template.querySelector('.elements__rectangle').cloneNode(true);
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


  _setEventListeners() {
    this._cardImage.addEventListener('click', () => this._handleCardClick({
      name: this._item.name,
      src: this._item.link,
    }));
    this._deleteButton.addEventListener('click', () => this._deleteHandler());
    this._likeButton.addEventListener('click', this._handleLikeIcon)
  }
}

