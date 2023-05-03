import PopupWithForm from './PopupWithForm';

function AddPlace(props) {
  return (
    <PopupWithForm
      isOpen={props.isOpen}
      onClose={props.onClose}
      title={'Новое место'}
      name={'add-card'}
      buttonText={'Создать'}
      children={
        <>
          <div className="popup__input-container">
            <input
              id="input_card-title"
              className="popup__input popup__input_card_title"
              type="text"
              name="name"
              placeholder="Название"
              value=""
              minlength="2"
              maxlength="30"
              autocomplete="off"
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
              autocomplete="off"
              required
            />
            <span className="popup__error popup__error_input_card-image"></span>
          </div>
        </>
      }
    />
  );
}

export default AddPlace;
