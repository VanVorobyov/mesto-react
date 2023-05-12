function Card({ card, onCardClick }) {
  function handleClick() {
    onCardClick(card);
  }

  return (
    <li className="card">
      <img
        src={card.link}
        alt={card.name}
        className="card__image card__image_new-image"
        onClick={handleClick}
      />
      <div className="card__info">
        <h2 className="card__title">{card.name}</h2>
        <div className="card__like-container">
          <button
            className="card__button card__button_icon-empty"
            type="button"
          ></button>
          <p className="card__counter">{card.likes.length}</p>
        </div>
        <button
          className="card__delete-button card__delete-button_js"
          type="button"
        ></button>
      </div>
    </li>
  );
}

export default Card;
