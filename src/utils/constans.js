const modalProfileEdit = document.querySelector(".popup_profile-edit");
const modalProfileEditButtonOpen = document.querySelector(
  ".profile__edit-button"
);
const modalProfileEditButtonClose = document.querySelector(
  ".popup__close-button"
);
const profileNameInput = document.querySelector(".popup__input_data_name");
const profileAboutInput = document.querySelector(".popup__input_data_about");
const modalWindowForm = document.querySelector(".popup__form");
const modalAddForm = document.querySelector(".popup_card-add");
const modalAddFormButtonOpen = document.querySelector(".profile__add-button");
const modalAddFormButtonClose = document.querySelector(
  ".popup__close-button_card-add"
);
const modalFigurePopup = document.querySelector(".popup_with-image");
const modalFigurePopupCloseButton = document.querySelector(
  ".popup__close-button_zoom-image"
);
const submitButtonAddForm = modalAddForm.querySelector(".popup__button");
const elementsContainer = document.querySelector(".elements");
const cardAddForm = modalAddForm.querySelector(".popup__form");
const popupCaption = document.querySelector(".popup__caption");
const popupImage = document.querySelector(".popup__image");
const placeName = document.querySelector(".popup__input_place_name");
const placeUrl = document.querySelector(".popup__input_place_url");
const modalAvatarEdit = document.querySelector(".popup_avatar-edit");
const avatarEditForm = modalAvatarEdit.querySelector(".popup__form");
const avatarEditButton = document.querySelector(".profile__ava-add");

const cardSelector = "#card-template";
const popupFigureSelector = ".popup_with-image";
const elementsContainerSelector = ".elements";
const profileNameSelector = ".profile__name";
const profileBioSelector = ".profile__bio";
const popupCardAddSelector = ".popup_card-add";
const popupProfileEditSelector = ".popup_profile-edit";
const popupDeleteConfirmSelector = ".popup_confirm-delete";
const popupAvatarEditSelector = ".popup_avatar-edit";
const profileAvatarSelector = ".profile__avatar";

const selectors = {
  inputSelector: ".popup__input",
  submitButtonSelector: ".popup__button",
  inactiveButtonClass: "popup__button_disabled",
  inputErrorClass: "popup__input_type_error",
  errorClass: "popup__input-error_active",
};

export {
  modalProfileEdit,
  modalProfileEditButtonOpen,
  modalProfileEditButtonClose,
  profileNameInput,
  profileAboutInput,
  modalWindowForm,
  modalAddForm,
  modalAddFormButtonOpen,
  modalAddFormButtonClose,
  modalFigurePopup,
  modalFigurePopupCloseButton,
  submitButtonAddForm,
  elementsContainer,
  cardAddForm,
  popupCaption,
  popupImage,
  placeName,
  placeUrl,
  selectors,
  cardSelector,
  popupFigureSelector,
  elementsContainerSelector,
  profileNameSelector,
  profileBioSelector,
  popupCardAddSelector,
  popupProfileEditSelector,
  popupDeleteConfirmSelector,
  popupAvatarEditSelector,
  avatarEditForm,
  profileAvatarSelector,
  avatarEditButton,
};
