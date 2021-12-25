const popupOpenButton = document.querySelector('.profile__edit-button');
const popupCloseButton = document.querySelector('.popup__close');
const popup = document.querySelector('.popup');
let popupProfile = document.querySelector('.popup__profile');
let popupName = document.querySelector('.popup__input_mod_name');
let popupAboute = document.querySelector('.popup__input_mod_aboute');
let profileTitle = document.querySelector('.profile__title');
let profileSubtitle = document.querySelector('.profile__subtitle');
let formElement = document.querySelector('.popup__profile');

function openPopup () {
  popup.classList.add('popup_opened');
  popupName.value = profileTitle.textContent;
  popupAboute.value = profileSubtitle.textContent;
}

function closePopup () {
  popup.classList.remove('popup_opened');
}

function formSubmitHandler (evt) {
  evt.preventDefault();
  profileTitle.textContent = popupName.value;
  profileSubtitle.textContent = popupAboute.value;
  closePopup ();
}

popupOpenButton.addEventListener('click', openPopup);
popupCloseButton.addEventListener('click', closePopup);
formElement.addEventListener('submit', formSubmitHandler); /* Спасибо за развернутый комментарий!*/








