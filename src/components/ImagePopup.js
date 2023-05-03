function ImagePopup() {
  return (
    <div className="popup popup_type_opened-image">
      <div className="popup__image-container">
        <button
          type="button"
          className="popup__close-button popup__close-button_full-image"
        ></button>
        <figure className="popup__image-figure">
          <img
            className="popup__full-image"
            src="#"
            alt=""
          />
          <figcaption className="popup__full-image-caption"></figcaption>
        </figure>
      </div>
    </div>
  );
}

export default ImagePopup;
