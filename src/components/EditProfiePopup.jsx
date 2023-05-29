import PopupWithForm from './PopupWithForm';
import { useEffect } from 'react';
import { useContext } from 'react'
import { CurrentUserContext } from '../context/CurrentUserContext.js';
import useValidation from '../hooks/useValidation';

function EditProfilePopup(props) {

  const {isOpen, onClose, onUpdateUser, isLoading} = props
  const {values, handleChange, errors, isValid, setValues, resetForm} = useValidation({name: '', about: ''})
  const currentUser = useContext(CurrentUserContext)

  useEffect(() => {
    setValues({
      name: currentUser.name,
      workplace: currentUser.about
  });
  }, [currentUser, setValues]); 


  useEffect(() => {
    if (currentUser.name && currentUser.about) {
        setValues({
            name: currentUser.name,
            about: currentUser.about
        });
    }
    if (!isOpen)
    resetForm();
}, [currentUser.about, currentUser.name, isOpen, resetForm, setValues])



  function handleSubmit(e) {
    e.preventDefault();
    if(isValid) {
      onUpdateUser({
        name: values.name,
        about: values.about,
      });
    }
  } 


  return (
    <PopupWithForm
      isOpen={isOpen}
      onClose={onClose}
      title={'Редактировать профиль'}
      name={'edit-profile'}
      onSubmit={handleSubmit}
      isValid={isValid}
      isLoading={isLoading}
      buttonText="Cохранить"
      loadingText={'Сохранение...'}
    >
      <div className="popup__input-container">
        <input
          className="popup__input popup__input_user-info_username"
          value={values.name || ''}
          onChange={handleChange}
          id="input_element-user"
          type="text"
          name="name"
          minLength="2"
          maxLength="40"
          placeholder="Имя пользователя"
          autoComplete="off"
          required
        />
        <span className={`popup__error popup__error_input_element-user ${isValid ? '' : 'popup__error_visible'}`}>{errors.name}</span>
      </div>
      <div className="popup__input-container">
        <input
          className="popup__input popup__input_user-info_about"
          value={values.about || ''}
          onChange={handleChange}
          id="input_element-about"
          type="text"
          name="about"
          minLength="2"
          maxLength="200"
          placeholder="О себе"
          autoComplete="off"
          required
        />
        <span className={`popup__error popup__error_input_element-user ${isValid ? '' : 'popup__error_visible'}`}>{errors.about}</span>
      </div>
    </PopupWithForm>
  );
}

export default EditProfilePopup;
