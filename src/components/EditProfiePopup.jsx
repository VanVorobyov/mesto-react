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
          id="input_element-user"
          className="popup__input popup__input_user-info_username"
          type="text"
          name="name"
          value={values.name || ''}
          placeholder="Имя пользователя"
          minLength="2"
          maxLength="40"
          autoComplete="off"
          onChange={handleChange}
          required
        />
        <span className={`popup__error popup__error_input_element-user ${isValid ? '' : 'popup__error_visible'}`}>{errors.name}</span>
      </div>
      <div className="popup__input-container">
        <input
          id="input_element-about"
          className="popup__input popup__input_user-info_about"
          type="text"
          name="about"
          value={values.about || ''}
          placeholder="О себе"
          minLength="2"
          maxLength="200"
          autoComplete="off"
          onChange={handleChange}
          required
        />
        <span className={`popup__error popup__error_input_element-user ${isValid ? '' : 'popup__error_visible'}`}>{errors.about}</span>
      </div>
    </PopupWithForm>
  );
}

export default EditProfilePopup;
