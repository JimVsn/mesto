import '../pages/index.css';
import { FormValidator } from  "../components/FormValidator.js";
import { Card } from "../components/Card.js";
import { Section } from "../components/Section.js";
import { Popup } from "../components/Popup.js";
import { UserInfo } from "../components/UserInfo.js";
import { PopupWithImage } from "../components/PopupWithImage.js";
import { PopupWithForm } from "../components/PopupWithForm.js"

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
const elementProfileName = '.popup__input_mod_name';
const elementProfileInfo = '.popup__input_mod_aboute';
export const profileTitle = document.querySelector('.profile__title');
export const profileSubtitle =  document.querySelector('.profile__subtitle');
const cardList = '.elements';
const cardTemplateSelector = '.card-template';
export const popupOpenSelector = 'popup_opened';


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

const popupOpenCardEdit = new Popup (popupEditCard);
const popupOpenProfileEdit = new Popup (profilePopup);
const popupWithImage = new PopupWithImage(popupTypeImage)


const defaultCardList = new Section({items: initialCards, renderer: (item) => {
    const card = new Card ({item, handleCardClick: () => {
      popupWithImage.open(item);
    }
  }, cardTemplateSelector)
    const cardElement = card.getCard()
    defaultCardList.addItem(cardElement)
} }, cardList);

defaultCardList.renderItems()

const userInfo = new UserInfo ({elementProfileInfo, elementProfileName});


const newCard = (item) => {
  const card = new Card({
    item,
    handleCardClick: () => {
      popupWithImage.open(item);
    }
  }, cardTemplateSelector);
  return card.getCard();
}


const newPopupWithForm = new PopupWithForm(popupEditCard, {
  handleSubmitForm: () => {
    const item = newCard({
      name: inputName.value,
      link: inputLink.value,
    });
    defaultCardList.addItem(item);
  },
});
newPopupWithForm.setEventListeners();

const newProfileForm = new PopupWithForm (profilePopup, {handleSubmitForm: () => {
  userInfo.setUserInfo();
}})


cardEditButton.addEventListener('click', () => {
  popupOpenCardEdit.open()
  cardEditFormValidator.resetValidation()
});
cardEditCloseButton.addEventListener('click', () => popupOpenCardEdit.close());

profileOpenButton.addEventListener('click', () => {
  userInfo. getUserInfo();
  popupOpenProfileEdit.open();
});
profileCloseButton.addEventListener('click', () => popupOpenProfileEdit.close());

profileForm.addEventListener('submit', newProfileForm.setEventListeners());

imageCloseButton.addEventListener('click', () => {
  popupWithImage.close()
})


popupOpenProfileEdit.setEventListeners()
popupOpenCardEdit.setEventListeners()
popupWithImage.setEventListeners()

  

