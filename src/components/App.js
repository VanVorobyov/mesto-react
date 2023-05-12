import React, { useState } from 'react';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import ImagePopup from './ImagePopup';
import EditProfie from './EditProfie';
import EditAvatar from './EditAvatar';
import AddPlace from './AddPlace';

function App(props) {
  const [isEditProfilePopupOpen, setEditProfilePopupOpen] = useState(false);
  const [isAddPlacePopupOpen, setAddPlacePopupOpen] = useState(false);
  const [isEditAvatarPopupOpen, setEditAvatarPopupOpen] = useState(false);
  const [isFullImagePopupOpen, setFullImagePopupOpen] = useState(false);

  const [selectedCard, setSelectedCard] = useState({});

  const handleEditProfileClick = () => setEditProfilePopupOpen(true);
  const handleAddPlaceClick = () => setAddPlacePopupOpen(true);
  const handleEditAvatarClick = () => setEditAvatarPopupOpen(true);

  const handleCardClick = (card) => {
    setSelectedCard(card);
    setFullImagePopupOpen(true);
  };
  const closeAllPopups = () => {
    setEditProfilePopupOpen(false);
    setAddPlacePopupOpen(false);
    setEditAvatarPopupOpen(false);
    setFullImagePopupOpen(false);
    setSelectedCard(false);
  };

  return (
    <div className="page__content">
      <Header />
      <Main
        onEditAvatar={handleEditAvatarClick}
        onEditProfile={handleEditProfileClick}
        onAddPlace={handleAddPlaceClick}
        onCardClick={handleCardClick}
      />
      <Footer />
      <EditProfie
        isOpen={isEditProfilePopupOpen}
        onClose={closeAllPopups}
      />
      <EditAvatar
        isOpen={isEditAvatarPopupOpen}
        onClose={closeAllPopups}
      />
      <AddPlace
        isOpen={isAddPlacePopupOpen}
        onClose={closeAllPopups}
      />
      <ImagePopup
        card={selectedCard}
        isOpen={isFullImagePopupOpen}
        onClose={closeAllPopups}
      />

      {/* <!-- popup confirm delete --> */}
      {/* <template id="card-template">
        <li className="card">
          <img
            href=""
            alt=""
            className="card__image card__image_new-image"
          />
          <div className="card__info">
            <h2 className="card__title"> </h2>
            <div className="card__like-container">
              <button
                className="card__button card__button_icon-empty"
                type="button"
              ></button>
              <p className="card__counter">1</p>
            </div>
            <button
              className="card__delete-button card__delete-button_js"
              type="button"
            ></button>
          </div>
        </li>
      </template> */}
    </div>
  );
}

export default App;
