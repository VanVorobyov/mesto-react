import React, { useState, useEffect } from 'react';
import api from '../utils/Api.js';
import Card from './Card.js';

function Main(props) {
  const { onEditAvatar, onEditProfile, onAddPlace, onCardClick } = props;

  const [userName, setUserName] = useState('');
  const [userDescription, setUserDescription] = useState('');
  const [userAvatar, setUserAvatar] = useState('#');

  const [cards, setCards] = useState([]);

  useEffect(() => {
    Promise.all([api.getUserInfo(), api.getInitialCards()])
      .then(([{ avatar, name, about }, initialCards]) => {
        setUserAvatar(avatar);
        setUserName(name);
        setUserDescription(about);
        setCards(initialCards);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <main className="content">
      {/* <!-- profile --> */}
      <section className="profile">
        <div className="profile__image-container">
          <img
            src={userAvatar}
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
            <h1 className="profile__user-title">{userName}</h1>
            <button
              className="profile__button-edit"
              type="button"
              onClick={onEditProfile}
            ></button>
          </div>
          <p className="profile__user-subtitle">{userDescription}</p>
        </div>
        <button
          className="profile__button-add"
          type="button"
          onClick={onAddPlace}
        ></button>
      </section>

      {/* <!-- Elements --> */}
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
              ></Card>
            );
          })}
        </ul>
      </section>
    </main>
  );
}

export default Main;
