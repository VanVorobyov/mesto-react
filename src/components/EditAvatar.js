import PopupWithForm from './PopupWithForm';

function EditAvatar(props) {
  return (
    <PopupWithForm
      isOpen={props.isOpen}
      onClose={props.onClose}
      title={'Обновить аватар'}
      name={'edit-avatar'}
      buttonText={'Сохранить'}
      children={
        <>
          <input
            id="input_avatar"
            className="popup__input popup__input_avatar"
            type="url"
            name="avatar"
            placeholder="Ссылка на фото"
            autocomplete="off"
            minLength="2"
            required
          />
          <span className="popup__error popup__error_input_avatar"></span>
        </>
      }
    />
  );
}

export default EditAvatar;
