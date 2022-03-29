import { FormValidator } from  "./FormValidator.js";
import { openPopup, popupCloseEscape, closePopup } from "./utils.js";
import { Card } from "./Card.js";

const profilePopup = document.querySelector('.popup_type_edit');
const profileOpenButton = document.querySelector('.profile__edit-button');
const profileCloseButton = profilePopup.querySelector('.popup__close');
const popupEditCard = document.querySelector('.popup_type_edit-card');
const cardEditButton = document.querySelector('.profile__add-button');
const cardEditCloseButton = popupEditCard.querySelector('.popup__close');
const profileForm = profilePopup.querySelector('.popup__form');
const cardEditForm = popupEditCard.querySelector('.popup__form');
const inputName = document.querySelector('.popup__input_mod_card-name');
const inputLink = document.querySelector('.popup__input_mod_card-link');
export const popupTypeImage = document.querySelector('.popup_type_image');
export const popupImage = document.querySelector('.popup__image');
export const imageTitle = document.querySelector('.popup__image-title')
const imageCloseButton = popupTypeImage.querySelector('.popup__close')
const popupName = document.querySelector('.popup__input_mod_name');
const popupAboute = document.querySelector('.popup__input_mod_aboute');
const profileTitle = document.querySelector('.profile__title');
const profileSubtitle = document.querySelector('.profile__subtitle');
const cardList = document.querySelector('.elements');
const cardTemplateSelector = '.card-template';
const initialCards = [
  {
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
  {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  }
];

const config = {
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  errorSelector: '.error-message',
  buttonSelector: '.popup__save',
  inputErrorClass: 'popup__input_type_error',
  errorVisibleClass: 'error-message_visible',
  inactiveButtonClass: 'popup__save_disabled'
}

const cardEditFormValidator = new FormValidator(config, cardEditForm);
cardEditFormValidator.enableValidation();

const formEditValidator = new FormValidator(config, profileForm);
formEditValidator.enableValidation();



function createCard (item) {
  const card = new Card (item , cardTemplateSelector)
  return card.getCard()
  
}


function renderCard (item, wrap) {
  const card = createCard(item)
  wrap.prepend(card)
}
initialCards.forEach((item) => {
  renderCard(item, cardList)
})




function handleProfileFormSubmit (evt) {
  evt.preventDefault();
  profileTitle.textContent = popupName.value;
  profileSubtitle.textContent = popupAboute.value;
  closePopup (profilePopup);
}

function popupCloseOverlay (event) {
  if (event.target === event.currentTarget) {
    closePopup (event.target);
  }
}

cardEditForm.addEventListener('submit', (evt) => {
  evt.preventDefault();
  const nameValue = inputName.value;
  const linkValue = inputLink.value;
  const objct = {
    name: nameValue,
    link: linkValue
  };
  createCard (objct);
  closePopup (popupEditCard);
  cardEditForm.reset();
})

cardEditButton.addEventListener('click', () => {
  openPopup (popupEditCard)
  cardEditFormValidator.resetValidation()
});
cardEditCloseButton.addEventListener('click', () => closePopup (popupEditCard));

profileOpenButton.addEventListener('click', () => {
  popupName.value = profileTitle.textContent;
  popupAboute.value = profileSubtitle.textContent;
  openPopup (profilePopup);
});
profileCloseButton.addEventListener('click', () => closePopup (profilePopup));

profileForm.addEventListener('submit', handleProfileFormSubmit);

imageCloseButton.addEventListener('click', () => {
  closePopup(popupTypeImage)
})

popupTypeImage.addEventListener('click', popupCloseOverlay);
profilePopup.addEventListener('click', popupCloseOverlay);
popupEditCard.addEventListener('click', popupCloseOverlay);

  

