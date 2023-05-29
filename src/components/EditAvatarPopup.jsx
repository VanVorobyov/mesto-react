import { useEffect } from 'react';
import PopupWithForm from './PopupWithForm';
import useValidation from '../hooks/useValidation'

function EditAvatarPopup(props) {
  const {isOpen, onClose, onUpdateAvatar, isLoading} = props;
  const {values, handleChange, errors, isValid, isDisabled, resetForm} = useValidation({avatar: ''})

  useEffect(() => {
    if (!isOpen){
      resetForm();
    }
  }, [isOpen, resetForm])


  function handleSubmit(e) {
    e.preventDefault();
    if(isValid) {
      onUpdateAvatar({
        avatar: values.avatar,
      });
  }
  } 

  return (
    <PopupWithForm
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
      isLoading={isLoading}
      isValid={isValid}
      isDisabled={isDisabled}
      title={'Обновить аватар'}
      name={'edit-avatar'}
      buttonText="Cохранить"
      loadingText={'Сохранение...'}
    >
      <input
        className="popup__input popup__input_avatar"
        onChange={handleChange}
        value={values.avatar || ''}
        id="input_avatar"
        type="url"
        name="avatar"
        placeholder="Ссылка на фото"
        minLength="2"
        required
      />
      <span className={`popup__error popup__error_input_avatar ${isValid ? '' : 'popup__error_visible'}`}>{errors.avatar}</span>
    </PopupWithForm>
  );
}

export default EditAvatarPopup;
