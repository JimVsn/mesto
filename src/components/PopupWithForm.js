import { Popup } from "./Popup.js"

export class PopupWithForm extends Popup {
    constructor (popupSelector, {handleSubmitForm}) {
      super(popupSelector)
      this._handleSubmitForm = handleSubmitForm
      this._popupForm = this._popupSelector.querySelector(".popup__form");
    }


    _getInputValues() {
        this._inputList = this._popupSelector.querySelectorAll('.popup__input');
    
        this._formValues = {};
        this._inputList.forEach(input => this._formValues[input.name] = input.value);
    
        return this._formValues;
      }
    close () { 
      super.close()
      this._popupForm.reset();
    }

    setEventListeners() {
        super.setEventListeners();
        this._popupForm.addEventListener('submit', (evt) => {
            evt.preventDefault()
            this._handleSubmitForm(this._getInputValues());
          this.close();
        });
    
        
      }
}