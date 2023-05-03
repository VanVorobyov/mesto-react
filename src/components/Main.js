function Main(props) {
  const { onEditAvatar, onEditProfile, onAddPlace } = props;
  return (
    <main className="content">
      {/* <!-- profile --> */}
      <section className="profile">
        <div className="profile__image-container">
          <img
            src="#"
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
            <h1 className="profile__user-title">Жак-Ив Кусто</h1>
            <button
              className="profile__button-edit"
              type="button"
              onClick={onEditProfile}
            ></button>
          </div>
          <p className="profile__user-subtitle">Исследователь океана</p>
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
        <ul className="cards"></ul>
      </section>
    </main>
  );
}

export default Main;
