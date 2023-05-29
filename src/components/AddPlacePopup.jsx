import { useEffect } from 'react';
import PopupWithForm from './PopupWithForm';
import useValidation from '../hooks/useValidation' 

function AddPlacePopup(props) {
  const {isOpen, onClose, onAddPlace, isLoading} = props;  
  const {values, handleChange, errors, isValid, isDisabled, resetForm} = useValidation({name: '', link: ''})

  useEffect(() => {
      if (!isOpen){
        resetForm();
      }
}, [isOpen, resetForm])


  function handleSubmit(e) {
    e.preventDefault();
    if(isValid){
      onAddPlace({
        name: values.name,
        link: values.link
      })
    }
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
      isValid={isValid}
      isDisabled={isDisabled}
    >
          <div className="popup__input-container">
            <input
              className="popup__input popup__input_card_title"
              value={values.name || ''}
              onChange={handleChange}
              id="input_card-title"
              type="text"
              name="name"
              placeholder="Название"
              minLength="2"
              maxLength="30"
              required
            />
            <span className={`popup__error popup__error_input_card-title ${isValid ? '' : 'popup__error_visible'}`}>{errors.name}</span>
          </div>
          <div className="popup__input-container">
            <input
              className="popup__input popup__input_card_image"
              value={values.link || ''}
              onChange={handleChange}
              id="input_card-image"
              type="url"
              name="link"
              placeholder="Ссылка на картинку"
              required
            />
            <span className={`popup__error popup__error_input_card-image ${isValid ? '' : 'popup__error_visible'}`}>{errors.link}</span>
          </div>
    </PopupWithForm>
  );
}

export default AddPlacePopup;
