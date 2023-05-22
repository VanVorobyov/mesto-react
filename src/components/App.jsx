import React, { useEffect, useState } from 'react';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import ImagePopup from './ImagePopup';
import EditProfiePopup from './EditProfiePopup';
import EditAvatarPopup from './EditAvatarPopup';
import AddPlacePopup from './AddPlacePopup';
import api from '../utils/Api.js';
import {CurrentUserContext} from '../context/CurrentUserContext.js';

function App(props) {
  const [isEditProfilePopupOpen, setEditProfilePopupOpen] = useState(false);
  const [isAddPlacePopupOpen, setAddPlacePopupOpen] = useState(false);
  const [isEditAvatarPopupOpen, setEditAvatarPopupOpen] = useState(false);
  const [isFullImagePopupOpen, setFullImagePopupOpen] = useState(false);
  const [cards, setCards] = useState([]);
  const [selectedCard, setSelectedCard] = useState({});
  const [currentUser, setCurrentUser] = useState({});

  useEffect(() => {
    Promise.all([api.getUserInfo(), api.getInitialCards()])
      .then(([userInfo, initialCards]) => {
        setCurrentUser(userInfo)
        setCards(initialCards);
      })
      .catch((err) => console.log(err));
    }, [])

  const handleEditProfileClick = () => setEditProfilePopupOpen(true);
  const handleAddPlaceClick = () => setAddPlacePopupOpen(true);
  const handleEditAvatarClick = () => setEditAvatarPopupOpen(true);

  const handleCardClick = (card) => {
    setSelectedCard(card);
    setFullImagePopupOpen(true);
  };

  const handleCardLike = (card) => {
    const isLiked = card.likes.some(like => like._id === currentUser._id);
    if (!isLiked) {
      api
      .putLike(card._id, !isLiked)
      .then((newCard) => {
        setCards((state) => state.map((c) => c._id === card._id ? newCard : c));
    })      
      .catch((err) => console.log(err));
  } 
  else {
    api
      .removeLike(card._id, !isLiked)
      .then((newCard) => {
        setCards((state) =>
          state.map((c) => (c._id === card._id ? newCard : c))
        );
      })
      .catch((err) => console.log(err));
  }
  }

  const handleCardDelete = (card) => {
    api
      .deleteCard(card._id)
      .then((newCard) => {
        const newCards = cards.filter((c) =>
          c._id === card._id ? "" : newCard
        );
        setCards(newCards);
      })
      .catch((err) => console.log(err));
  }

  const handleUpdateUser = (info) => {
    api
    .setUserInfo(info)
    .then((newUser) => {
      setCurrentUser(newUser)
      closeAllPopups()
  })
  .catch((err) => console.log(err));
}

  const handleUpdateAvatar = (avatar) => {
    api
      .changeAvatar(avatar)
      .then((newAvatar) => {
        setCurrentUser(newAvatar)
        closeAllPopups()
  })
  .catch((err) => console.log(err));
  }

  const handleAddPlaceSubmit = (card) => { 
      api
        .postCard(card)
        .then((newCard) => {
          setCards([newCard, ...cards])
          closeAllPopups()
        })
        .catch((err) => console.log(err));
      }
    

  const closeAllPopups = () => {
    setEditProfilePopupOpen(false);
    setAddPlacePopupOpen(false);
    setEditAvatarPopupOpen(false);
    setFullImagePopupOpen(false);
    setSelectedCard({});
  };

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="page__content">
        <Header />
        <Main
        onEditAvatar={handleEditAvatarClick}
        onEditProfile={handleEditProfileClick}
        onAddPlace={handleAddPlaceClick}
        onCardClick={handleCardClick}
        onCardLike={handleCardLike}
        onCardDelete={handleCardDelete}
        currentUser={currentUser}
        cards={cards}
        />
        <Footer />
        <EditProfiePopup
        isOpen={isEditProfilePopupOpen}
        onClose={closeAllPopups}
        onUpdateUser={handleUpdateUser}
        />
        <EditAvatarPopup
        isOpen={isEditAvatarPopupOpen}
        onClose={closeAllPopups}
        onUpdateAvatar={handleUpdateAvatar}
        />
        <AddPlacePopup
        isOpen={isAddPlacePopupOpen}
        onClose={closeAllPopups}
        onAddPlace={handleAddPlaceSubmit}
        />
        <ImagePopup
          card={selectedCard}
          isOpen={isFullImagePopupOpen}
          onClose={closeAllPopups}
        />
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
