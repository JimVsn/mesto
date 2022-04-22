export const popupEditCard = document.querySelector('.popup_type_edit-card');
export const profilePopup = document.querySelector('.popup_type_edit');
export const profilePopupSelector = ".popup_type_edit";
export const profileOpenButton = document.querySelector(".profile__edit-button");
export const popupEditCardSelector = ".popup_type_edit-card";
export const cardEditButton = document.querySelector(".profile__add-button");
export const cardEditCloseButton = popupEditCard.querySelector(".popup__close");
export const profileForm = profilePopup.querySelector(".popup__form");
export const cardEditForm = popupEditCard.querySelector(".popup__form");
export const inputName = document.querySelector(".popup__input_mod_card-name");
export const inputLink = document.querySelector(".popup__input_mod_card-link");
export const popupTypeImageSelector = ".popup_type_image";
export const nameElementSelector = ".profile__title";
export const infoElementSelector = ".profile__subtitle";
export const inputProfileName = document.querySelector(".popup__input_mod_name");
export const inputProfileInfo = document.querySelector(".popup__input_mod_aboute");
export const cardList = ".elements";
export const cardTemplateSelector = ".card-template";

export const initialCards = [
    {
      name: "Архыз",
      link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg",
    },
    {
      name: "Челябинская область",
      link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg",
    },
    {
      name: "Иваново",
      link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg",
    },
    {
      name: "Камчатка",
      link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg",
    },
    {
      name: "Холмогорский район",
      link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg",
    },
    {
      name: "Байкал",
      link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg",
    },
  ];

  export const config = {
    formSelector: ".popup__form",
    inputSelector: ".popup__input",
    errorSelector: ".error-message",
    buttonSelector: ".popup__save",
    inputErrorClass: "popup__input_type_error",
    errorVisibleClass: "error-message_visible",
    inactiveButtonClass: "popup__save_disabled",
  };
