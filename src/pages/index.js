import "./index.css";
import { FormValidator } from "../components/FormValidator.js";
import { Card } from "../components/Card.js";
import { Section } from "../components/Section.js";
import { UserInfo } from "../components/UserInfo.js";
import { PopupWithImage } from "../components/PopupWithImage.js";
import { PopupWithForm } from "../components/PopupWithForm.js";
import {
  popupEditCard,
  profilePopup,
  profilePopupSelector,
  profileOpenButton,
  popupEditCardSelector,
  cardEditButton,
  cardEditCloseButton,
  profileForm,
  cardEditForm,
  inputName,
  inputLink,
  popupTypeImageSelector,
  nameElementSelector,
  infoElementSelector,
  inputProfileName,
  inputProfileInfo,
  cardList,
  cardTemplateSelector,
  initialCards,
  config,
} from "../utils/constants.js";

const cardEditFormValidator = new FormValidator(config, cardEditForm);
cardEditFormValidator.enableValidation();

const formEditValidator = new FormValidator(config, profileForm);
formEditValidator.enableValidation();

const popupWithImage = new PopupWithImage(popupTypeImageSelector);

const createCard = (item) => {
  const card = new Card(
    {
      item,
      handleCardClick: () => {
        popupWithImage.open(item);
      },
    },
    cardTemplateSelector
  );
  return card.getCard();
};

const defaultCardList = new Section(
  {
    items: initialCards,
    renderer: (item) => {
      defaultCardList.addItem(createCard(item));
    },
  },
  cardList
);

defaultCardList.renderItems();

const userInfo = new UserInfo({ nameElementSelector, infoElementSelector });

const newPopupWithForm = new PopupWithForm(popupEditCardSelector, {
  handleSubmitForm: (item) => {
    defaultCardList.addItem(createCard(item));
  },
});
newPopupWithForm.setEventListeners();

const newProfileForm = new PopupWithForm(profilePopupSelector, {
  handleSubmitForm: (item) => {
    userInfo.setUserInfo(item);
  },
});

newProfileForm.setEventListeners();

cardEditButton.addEventListener("click", () => {
  newPopupWithForm.open();
  cardEditFormValidator.resetValidation();
});

profileOpenButton.addEventListener("click", () => {
  const { name, bio } = userInfo.getUserInfo();
  inputProfileName.value = name;
  inputProfileInfo.value = bio;
  newProfileForm.open();
});

popupWithImage.setEventListeners();
