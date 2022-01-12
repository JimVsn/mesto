const profilePopup = document.querySelector('.popup_type_edit');
const profileOpenButton = document.querySelector('.profile__edit-button');
const profileCloseButton = profilePopup.querySelector('.popup__close');
const popupEditCard = document.querySelector('.popup_type_edit-card');
const editCardButton = document.querySelector('.profile__add-button');
const editCardCloseButton = popupEditCard.querySelector('.popup__close');
const profileForm = profilePopup.querySelector('.popup__form');
const editCardForm = popupEditCard.querySelector('.popup__form');
const inputName = document.querySelector('.popup__input_mod_card-name');
const inputLink = document.querySelector('.popup__input_mod_card-link');
const popupTypeImage = document.querySelector('.popup_type_image');
const popupImage = document.querySelector('.popup__image');
const imageTitle = document.querySelector('.popup__image-title')
const imageCloseButton = popupTypeImage.querySelector('.popup__close')
const popupName = document.querySelector('.popup__input_mod_name');
const popupAboute = document.querySelector('.popup__input_mod_aboute');
const profileTitle = document.querySelector('.profile__title');
const profileSubtitle = document.querySelector('.profile__subtitle');
const cardList = document.querySelector('.elements');
const cardTempate = document.querySelector('.card-template').content;
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

function deleteHandler (evt) {
  evt.target.closest('.elements__rectangle').remove();
}


function getCard (item) {
  const cardElement = cardTempate.cloneNode(true);
  const cardImage = cardElement.querySelector('.elements__element');
  const cardText = cardElement.querySelector('.elements__text');
  const deleteButton = cardElement.querySelector('.elements__delete-button');
  const likeButton = cardElement.querySelector('.elements__group');
  
  cardImage.src = item.link
  cardText.textContent = item.name
  cardImage.alt = cardText.textContent

  cardImage.addEventListener('click', () => {
    openPopup(popupTypeImage)
    popupImage.src = item.link
    imageTitle.textContent = item.name
    popupImage.alt = cardText.textContent
  })
  
  deleteButton.addEventListener('click', deleteHandler);
  likeButton.addEventListener('click', () => {
    likeButton.classList.toggle('elements__group_active')
    
  });
    return cardElement;
}

initialCards.forEach(createCard);


function createCard (cardData) {
  const cardElement = getCard(cardData)
  cardList.prepend(cardElement);
}


function openPopup(popup){
  popup.classList.add('popup_opened')
}

function closePopup(popup){
  popup.classList.remove('popup_opened')
}

function handleProfileFormSubmit (evt) {
  evt.preventDefault();
  profileTitle.textContent = popupName.value;
  profileSubtitle.textContent = popupAboute.value;
  closePopup (profilePopup);
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
  editCardForm.reset();
  closePopup (popupEditCard);
})

editCardButton.addEventListener('click', () => openPopup (popupEditCard));
editCardCloseButton.addEventListener('click', () => closePopup (popupEditCard));

profileOpenButton.addEventListener('click', () => {
  openPopup (profilePopup);
  popupName.value = profileTitle.textContent;
  popupAboute.value = profileSubtitle.textContent;
});
profileCloseButton.addEventListener('click', () => closePopup (profilePopup));

profileForm.addEventListener('submit', handleProfileFormSubmit);

imageCloseButton.addEventListener('click', () => {
  closePopup(popupTypeImage)
})

