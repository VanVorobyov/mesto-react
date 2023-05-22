import { useContext } from 'react'
import { CurrentUserContext } from '../context/CurrentUserContext.js';

function Card({ card, onCardClick, onCardLike, onCardDelete }) {
  const currentUser = useContext(CurrentUserContext)
  const isOwn = card.owner._id === currentUser._id;
  const isLiked = card.likes.some(like => like._id === currentUser._id);
  const cardLikeButtonClassName = ( 
    `card__button ${isLiked ? 'card__button_icon-fill' : 'card__button_icon-empty'}` 
  );; 

  function handleClick() {
    onCardClick(card);
  }

  function handleDeleteClick() {
    onCardLike(card);
  }

  function handleLikeClick() {
    onCardDelete(card);
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
            className={cardLikeButtonClassName}
            type="button"
            onClick={handleLikeClick}
          ></button>
          <p className="card__counter">{card.likes.length}</p>
        </div>

        {isOwn && <button
          className="card__delete-button card__delete-button_js"
          type="button"
          onClick={handleDeleteClick}
        ></button>} 
      </div>
    </li>
  );
}

export default Card;
