import { popupOpenSelector } from './index.js'
export class Popup {
  constructor(popupSelector) {
    this._popupSelector = popupSelector;
    this._handleEscClose = this._handleEscClose.bind(this);
    this._closeButton = this._popupSelector.querySelector('.popup__close');
  }

  open() {
    this._popupSelector.classList.add(popupOpenSelector);
    document.addEventListener('keydown', this._handleEscClose);
    
  }

  close() {
    this._popupSelector.classList.remove(popupOpenSelector);
    document.removeEventListener('keydown', this._handleEscClose);
    
  }

  _handleEscClose (event) {
    if( event.code === 'Escape' ) {
      this.close()
    }
  }

  setEventListeners() {   
    this._closeButton.addEventListener('click', () => {
      this.close()
    })

    this._popupSelector.addEventListener('click', (event) => {
      if (event.target.classList.contains(popupOpenSelector)) {
        this.close ();
      }
    })
  }
}