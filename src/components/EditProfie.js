import PopupWithForm from './PopupWithForm';

function EditProfile(props) {
  return (
    <PopupWithForm
      isOpen={props.isOpen}
      onClose={props.onClose}
      title={'Редактировать профиль'}
      name={'edit-profile'}
      buttonText={'Сохранить'}
      children={
        <>
          <div className="popup__input-container">
            <input
              id="input_element-user"
              className="popup__input popup__input_user-info_username"
              type="text"
              name="name"
              value=""
              placeholder="Имя пользователя"
              minlength="2"
              maxlength="40"
              autocomplete="off"
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
              value=""
              placeholder="О себе"
              minlength="2"
              maxlength="200"
              autocomplete="off"
              required
            />
            <span className="popup__error popup__error_input_element-about"></span>
          </div>
        </>
      }
    />
  );
}

export default EditProfile;
