export function openPopup(popup){
    popup.classList.add('popup_opened');
    document.addEventListener('keydown', popupCloseEscape);
  }

 export function popupCloseEscape (event) {
    if( event.code === 'Escape' ) {
      closePopup (document.querySelector('.popup_opened'));
    }
  }

  export function closePopup(popup){
    popup.classList.remove('popup_opened');
    document.removeEventListener('keydown', popupCloseEscape);
  }