import Card from './Card.jsx';
import { useContext } from 'react'
import { CurrentUserContext } from '../context/CurrentUserContext.js';


function Main(props) {
  const { onEditAvatar, onEditProfile, onAddPlace, onCardClick, onCardLike, onCardDelete, cards } = props;
  const currentUser = useContext(CurrentUserContext)

  return (
    <main className="content">
      <section className="profile">
        <div className="profile__image-container">
          <img
            src={currentUser.avatar}
            alt="Фотография профиля"
            className="profile__image"
          />
          <button
            type="button"
            className="profile__button-avatar profile__button-avatar_icon"
            aria-label="Изменить фото"
            onClick={onEditAvatar}
          ></button>
        </div>
        <div className="profile__info">
          <div className="profile__user">
            <h1 className="profile__user-title">{currentUser.name}</h1>
            <button
              className="profile__button-edit"
              type="button"
              onClick={onEditProfile}
            ></button>
          </div>
          <p className="profile__user-subtitle">{currentUser.about}</p>
        </div>
        <button
          className="profile__button-add"
          type="button"
          onClick={onAddPlace}
        ></button>
      </section>

      <section
        className="elements"
        aria-label="elements"
      >
        <ul className="cards">
          {cards.map((card) => {
            return (
              <Card
                key={card._id}
                card={card}
                onCardClick={onCardClick}
                onCardLike={onCardLike}
                onCardDelete={onCardDelete}
              ></Card>
            );
          })}
        </ul>
      </section>
    </main>
  );
}

export default Main;
