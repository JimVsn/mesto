export class FormValidator {
  constructor (settings, form) {
    this._form = form
    this._settings = settings

    this._inputList = Array.from(this.form.querySelectorAll(this._settings.inputSelector));
    this._buttonElement = this.form.querySelector(this._settings.ButtonSelector);
  }

  // function submitForm (event) {
  //   event.preventDefault();
  // }
  
  _showError = (input, errorContainer) => {
    const {inputErrorClass, errorVisibleClass} = this._settings
    const errorContainer = form.querySelector(`#error-${input.id}`);
    input.classList.add(inputErrorClass);
    errorContainer.classList.add(errorVisibleClass);
    errorContainer.textContent = input.validationMessage;
  };
  
  _hideError = (input) => {
    const {inputErrorClass, errorVisibleClass} = this._settings
    const errorContainer = form.querySelector(`#error-${input.id}`);
    input.classList.remove(inputErrorClass);
    errorContainer.classList.remove(errorVisibleClass);
    errorContainer.textContent = '';
  };
  
  // function toggleButton (form, { buttonSelector, inactiveButtonClass }) {
  //   const button = form.querySelector(buttonSelector);
  //   const isFormValid = form.checkValidity();
  
  //   if (isFormValid) {
  //     button.classList.remove (inactiveButtonClass);
  //     button.removeAttribute ('disabled');
  // } else {
  //     button.classList.add (inactiveButtonClass);
  //     button.setAttribute ('disabled', '');
  //   }
  // }


  
  
  _validateInput = (input) => {
    // const errorContainer = form.querySelector(`#error-${input.id}`);
    if(input.validity.valid) {
      this._hideError (input);
    } else {
      this._showError (input, input.validationMessage);
    }
    // toggleButton (form, classes);
  }

    _hasInvalidInput = () => {
    return this._inputList.some((input) => {
      return !input.validity.valid;
    });
  };

  _disableSubmitButton = () => {
    const { inactiveButtonClass } = this._settings
    this._buttonElement.classList.add(inactiveButtonClass);
    this._buttonElement.disabled = true;
  }

  _enableSubmitButton = () => {
    const { inactiveButtonClass } = this._settings
    this._buttonElement.classList.remove(inactiveButtonClass);
    this._buttonElement.disabled = false;
  }

  _toggleButton = () => {
    if (this.__validateInput()) {
      this._disableSubmitButton(); 
    }
      else {
        this._enableSubmitButton();
      } 
  };
  
  resetValidation() {
    this._toggleButton();
    this._inputList.forEach((input) => {
      this._hideError(input);
    });
  }
  
  enableValidation () {
    // const forms = document.querySelectorAll(formSelector);
      form.addEventListener('submit', submitForm)
      this.form.addEventListener('submit', (evt) => {
              evt.preventDefault();
            });
            this._setEventListeners();
   }

   

   _setEventListeners() {
    this._inputList.forEach((input) => {
      input.addEventListener('input', () => {
        this._checkInputValidity(input);
        this._toggleButton();
      });
    });
  };

  enableValidation ({
    formSelector: '.popup__form',
    inputSelector: '.popup__input',
    errorSelector: '.error-message',
    buttonSelector: '.popup__save',
    inputErrorClass: 'popup__input_type_error',
    errorVisibleClass: 'error-message_visible',
    inactiveButtonClass: 'popup__save_disabled'
  });
}
  
  
  

  




// export class FormValidator {
//   constructor (settings, form) {
//     this.form = form
//     this._settings = settings

//     this._inputList = Array.from(this.form.querySelectorAll(this._settings.inputSelector));
//     this._buttonElement = this.form.querySelector(this._settings.submitButtonSelector);
//   }

  

//   111 _showInputError = (inputElement, errorMessage) => {
//     const {errorClass, inputErrorClass} = this._settings

//     const errorElement = this.form.querySelector(`.${inputElement.id}-error`);
//     inputElement.classList.add(inputErrorClass);
//     errorElement.textContent = errorMessage;
//     errorElement.classList.add(errorClass);
//   };

//   111 _hideInputError = (inputElement) => {
//     const {errorClass, inputErrorClass} = this._settings

//     const errorElement = this.form.querySelector(`.${inputElement.id}-error`);
//     inputElement.classList.remove(inputErrorClass);
//     errorElement.textContent = '';
//     errorElement.classList.remove(errorClass);
//   };

//   111 _checkInputValidity = (inputElement) => {
//     if (inputElement.validity.valid) {
//       this._hideInputError(inputElement);
//     } else {
//       this._showInputError(inputElement, inputElement.validationMessage);
//     }
//   };

//   1111 _hasInvalidInput = () => {
//     return this._inputList.some((inputElement) => {
//       return !inputElement.validity.valid;
//     });
//   };

//   111 resetValidation() {
//     this._toggleButtonState();

//     this._inputList.forEach((inputElement) => {
//       this._hideInputError(inputElement);
//     });
//   }

//   _disableSubmitButton = () => {
//     const { inactiveButtonClass } = this._settings
//     this._buttonElement.classList.add(inactiveButtonClass);
//     this._buttonElement.disabled = true;
//   }

//   _enableSubmitButton = () => {
//     const { inactiveButtonClass } = this._settings
//     this._buttonElement.classList.remove(inactiveButtonClass);
//     this._buttonElement.disabled = false;
//   }

//   111 _toggleButtonState = () => {
//     if (this._hasInvalidInput()) {
//       this._disableSubmitButton(); 
//     }
//       else {
//         this._enableSubmitButton();
//       } 
//   };

//   _111 setEventListeners() {
//     this._inputList.forEach((inputElement) => {
//       inputElement.addEventListener('input', () => {
//         this._checkInputValidity(inputElement);
//         this._toggleButtonState();
//       });
//     });
//   };

//   111 enableValidation() {
//     this.form.addEventListener('submit', (evt) => {
//       evt.preventDefault();
//     });

//     this._setEventListeners();
//   }
// }
