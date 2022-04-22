export class FormValidator {
  constructor(settings, form) {
    this._form = form;
    this._settings = settings;

    this._inputList = Array.from(
      this._form.querySelectorAll(this._settings.inputSelector)
    );
    this._buttonElement = this._form.querySelector(
      this._settings.buttonSelector
    );
  }

  _showError = (input) => {
    const { inputErrorClass, errorVisibleClass } = this._settings;
    const errorContainer = this._form.querySelector(`#error-${input.id}`);
    input.classList.add(inputErrorClass);
    errorContainer.classList.add(errorVisibleClass);
    errorContainer.textContent = input.validationMessage;
  };

  _hideError = (input) => {
    const { inputErrorClass, errorVisibleClass } = this._settings;
    const errorContainer = this._form.querySelector(`#error-${input.id}`);
    input.classList.remove(inputErrorClass);
    errorContainer.classList.remove(errorVisibleClass);
    errorContainer.textContent = "";
  };

  _validateInput = (input) => {
    if (input.validity.valid) {
      this._hideError(input);
    } else {
      this._showError(input, input.validationMessage);
    }
  };

  _hasInvalidInput = () => {
    return this._inputList.some((input) => {
      return !input.validity.valid;
    });
  };

  _disableSubmitButton = () => {
    const { inactiveButtonClass } = this._settings;
    this._buttonElement.classList.add(inactiveButtonClass);
    this._buttonElement.disabled = true;
  };

  _enableSubmitButton = () => {
    const { inactiveButtonClass } = this._settings;
    this._buttonElement.classList.remove(inactiveButtonClass);
    this._buttonElement.disabled = false;
  };

  _toggleButton = () => {
    if (this._hasInvalidInput()) {
      this._disableSubmitButton();
    } else {
      this._enableSubmitButton();
    }
  };

  resetValidation() {
    this._toggleButton();
    this._inputList.forEach((input) => {
      this._hideError(input);
    });
  }

  enableValidation() {
    this._form.addEventListener("submit", (evt) => {
      evt.preventDefault();
    });

    this._setEventListeners();
    this._toggleButton();
  }

  _setEventListeners() {
    this._inputList.forEach((input) => {
      input.addEventListener("input", () => {
        this._validateInput(input);
        this._toggleButton();
      });
    });
  }
}
