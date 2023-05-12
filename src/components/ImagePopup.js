function ImagePopup({ isOpen, onClose, card }) {
  return (
    <div className={`popup popup_type_opened-image ${isOpen ? 'popup_opened' : ''}`}>
      <div className="popup__image-container">
        <button
          type="button"
          className="popup__close-button popup__close-button_full-image"
          onClick={onClose}
        ></button>
        <figure className="popup__image-figure">
          <img
            className="popup__full-image"
            src={card.link}
            alt={card.name}
          />
          <figcaption className="popup__full-image-caption">{card.name}</figcaption>
        </figure>
      </div>
    </div>
  );
}

export default ImagePopup;
