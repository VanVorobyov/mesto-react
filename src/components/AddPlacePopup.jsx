import { useState } from 'react';
import PopupWithForm from './PopupWithForm';

function AddPlace(props) {
  const {isOpen, onClose, onAddPlace, isLoading} = props;  

  const [cardName, setCardName] = useState(''); 
  const [cardLink, setCardLink] = useState('');

  function handleSubmit(e) {
    e.preventDefault();
    onAddPlace({
      name: cardName,
      link: cardLink
    })
  } 

  function handleCardName(e) {
    setCardName(e.target.value);
  }

  function handleCardLink(e) {
    setCardLink(e.target.value);
  }

  return (
    <PopupWithForm
      isOpen={isOpen}
      onClose={onClose}
      title={'Новое место'}
      name={'add-card'}
      buttonText={'Создать'}
      onSubmit={handleSubmit}
      isLoading={isLoading}
      loadingText={'Сохранение...'}
    >
          <div className="popup__input-container">
            <input
              id="input_card-title"
              className="popup__input popup__input_card_title"
              type="text"
              name="name"
              placeholder="Название"
              value={cardName}
              onChange={handleCardName}
              minLength="2"
              maxLength="30"
              autoСomplete="off"
              required
            />
            <span className="popup__error popup__error_input_card-title"></span>
          </div>
          <div className="popup__input-container">
            <input
              id="input_card-image"
              className="popup__input popup__input_card_image"
              type="url"
              name="link"
              placeholder="Ссылка на картинку"
              value={cardLink}
              onChange={handleCardLink}
              autoСomplete="off"
              required
            />
            <span className="popup__error popup__error_input_card-image"></span>
          </div>
    </PopupWithForm>
  );
}

export default AddPlace;
