const popupOpenButton = document.querySelector('.profile__edit-button');
const popupCloseButton = document.querySelector('.popup__close');
const popup = document.querySelector('.popup');
let popupSave = document.querySelector('.popup__saveform');
let popupProfile = document.querySelector('.popup__profile');
let popupName = document.querySelector('.popup__input_mod-name');
let popupAboute = document.querySelector('.popup__input_mod-aboute');
let profileTitle = document.querySelector('.profile__title');
let profileSubtitle = document.querySelector('.profile__subtitle');

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
popupSave.addEventListener('click', closePopup);
popupSave.addEventListener('click', formSubmitHandler);
popupSave.addEventListener('submit', formSubmitHandler);
popup.addEventListener( 'keyup', event => { /*этот код отвечает за сохранение и закрытие попапа по кнопке Enter, в соответствии с заданием из чеклиста. Из вашего комментария не совсем понятно, почему он не относится к заданию и его нужно удалить*/
  if( event.code === 'Enter' ) profileTitle.textContent = popupName.value;
  if( event.code === 'Enter' ) profileSubtitle.textContent = popupAboute.value;
  if( event.code === 'Enter' ) closePopup ();
});






