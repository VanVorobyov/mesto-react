import { useRef } from 'react';
import PopupWithForm from './PopupWithForm';

function EditAvatarPopup(props) {
  const {isOpen, onClose, onUpdateAvatar} = props;
  const avatarRef = useRef('')
  


  function handleSubmit(e) {
    e.preventDefault();
    onUpdateAvatar({
      avatar: avatarRef.current.value,
    });
  } 

  return (
    <PopupWithForm
      isOpen={isOpen}
      onClose={onClose}
      title={'Обновить аватар'}
      name={'edit-avatar'}
      onSubmit={handleSubmit}
    >
      <input
        ref={avatarRef}
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
    </PopupWithForm>
  );
}

export default EditAvatarPopup;