const popupOpenButton = document.querySelector('.profile__edit-button');
const popupCloseButton = document.querySelector('.popup__close');
const popup = document.querySelector('.popup_type_edit');
const popupEditCard = document.querySelector('.popup_type_edit-card');
const editCardButton = document.querySelector('.profile__add-button');
const editCardCloseButton = popupEditCard.querySelector('.popup__close');
const editForm = popup.querySelector('.popup__profile');
const editCardForm = popupEditCard.querySelector('.popup__profile');
const inputName = document.querySelector('.popup__input_mod_card-name');
const inputLink = document.querySelector('.popup__input_mod_card-link');
const popupTypeImage = document.querySelector('.popup_type_image');
const popupImage = document.querySelector('.popup__image');
const imageTitle = document.querySelector('.popup__image-title')
const imageCloseButton = document.querySelector('.popup__image-close')
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
let popupProfile = document.querySelector('.popup__profile');
let popupName = document.querySelector('.popup__input_mod_name');
let popupAboute = document.querySelector('.popup__input_mod_aboute');
let profileTitle = document.querySelector('.profile__title');
let profileSubtitle = document.querySelector('.profile__subtitle');
let formElement = document.querySelector('.popup__profile');

const cardList = document.querySelector('.elements');
const cardTempate = document.querySelector('.card-template').content;

function deleteHandler (evt) {
  evt.target.closest('.elements__rectangle').remove();
}


function createCard (cardData) {
  const cardElement = cardTempate.cloneNode(true);
  const cardImage = cardElement.querySelector('.elements__element');
  const cardText = cardElement.querySelector('.elements__text');
  const deleteButton = cardElement.querySelector('.elements__delete-button');
  const likeButton = cardElement.querySelector('.elements__group');

  cardText.textContent = cardData.name
  cardImage.src = cardData.link

  cardImage.addEventListener('click', () => {
    toggleModal(popupTypeImage)
    popupImage.src = cardData.link
    imageTitle.textContent = cardData.name
  })
  
  deleteButton.addEventListener('click', deleteHandler);
  likeButton.addEventListener('click', () => {
    likeButton.classList.toggle('elements__group_active')
  });
  cardList.prepend(cardElement);
}

initialCards.forEach(createCard);

function toggleModal (modal) {
  modal.classList.toggle('popup_opened');
  editCardForm.reset();
}

function formSubmitHandler (evt) {
  evt.preventDefault();
  profileTitle.textContent = popupName.value;
  profileSubtitle.textContent = popupAboute.value;
  toggleModal (popup);
}

editCardForm.addEventListener('submit', (evt) => {
  evt.preventDefault();
  const nameValue = inputName.value;
  const linkValue = inputLink.value;
  const objct = {
    name: nameValue,
    link: linkValue
  };
  createCard (objct);
  toggleModal (popupEditCard);
})

editCardButton.addEventListener('click', () => toggleModal (popupEditCard));
editCardCloseButton.addEventListener('click', () => toggleModal (popupEditCard));

popupOpenButton.addEventListener('click', () => {
  toggleModal (popup);
  popupName.value = profileTitle.textContent;
  popupAboute.value = profileSubtitle.textContent;
});
popupCloseButton.addEventListener('click', () => toggleModal (popup));

formElement.addEventListener('submit', formSubmitHandler);

imageCloseButton.addEventListener('click', () => {
  toggleModal(popupTypeImage)
})

