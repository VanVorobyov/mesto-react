import PopupWithForm from './PopupWithForm';
import { useState, useEffect } from 'react';
import { useContext } from 'react'
import { CurrentUserContext } from '../context/CurrentUserContext.js';

function EditProfilePopup(props) {
  const {isOpen, onClose, onUpdateUser, isLoading} = props
  const currentUser = useContext(CurrentUserContext)

  const[userName, setUserName] = useState('')
  const[userAbout, setUserAbout] = useState('')

  useEffect(() => {
    setUserName(currentUser.name);
    setUserAbout(currentUser.about);
  }, [currentUser, isOpen]); 

  function handleSubmit(e) {
    e.preventDefault();
    onUpdateUser({
      name: userName,
      about: userAbout,
    });
  } 

  function handleUserName(e) {
    setUserName(e.target.value);
  }

  function handleUserAbout(e) {
    setUserAbout(e.target.value);
  }

  return (
    <PopupWithForm
      isOpen={isOpen}
      onClose={onClose}
      title={'Редактировать профиль'}
      name={'edit-profile'}
      onSubmit={handleSubmit}
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
          value={userName || ''}
          placeholder="Имя пользователя"
          minLength="2"
          maxLength="40"
          autoComplete="off"
          onChange={handleUserName}
          required
        />
        <span className="popup__error popup__error_input_element-user"></span>
      </div>
      <div className="popup__input-container">
        <input
          id="input_element-about"
          className="popup__input popup__input_user-info_about"
          type="text"
          name="about"
          value={userAbout || ''}
          placeholder="О себе"
          minLength="2"
          maxLength="200"
          autoComplete="off"
          onChange={handleUserAbout}
          required
        />
        <span className="popup__error popup__error_input_element-about"></span>
      </div>
    </PopupWithForm>
  );
}

export default EditProfilePopup;
