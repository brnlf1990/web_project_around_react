import React from "react";
import "../blocks/Profile.css";
import "../blocks/Cards.css";
import profileEditButton from "../images/avatarPencil.png";
import cardAddButton from "../images/add__button_icon.jpg";
import Card from "./Card";
import { CurrentUserContext } from "../contexts/CurrentUserContext";
function Main({
  onEditProfileClick,
  onAddPlaceClick,
  onEditAvatarClick,
  onCardClick,
  cards,
  onCardLike,
  onCardDelete,
}) {
  const { currentUser } = React.useContext(CurrentUserContext);
  return (
    <main className="content">
      <section className="profile">
        <div className="profile__container">
          <div className="profile__avatar" onClick={onEditAvatarClick}>
            <img
              src={currentUser.avatar}
              alt="profile image"
              className="profile__avatar-image"
            />
          </div>
          <div className="profile__info">
            <h2 className="profile__info-name" id="profile__info_name">
              {currentUser.name}
            </h2>
            <h3 className="profile__info-content" id="profile__info_content">
              {currentUser.about}
            </h3>
          </div>
          <button
            className="profile__info-edit-button"
            onClick={onEditProfileClick}
          >
            <img
              src={profileEditButton}
              alt="pencil image"
              className="profile__info-edit-button-image"
            />
          </button>
          <button className="profile__add-button" onClick={onAddPlaceClick}>
            <img
              src={cardAddButton}
              alt="add icon"
              className="profile__add-button-icon"
            />
          </button>
        </div>
      </section>
      <section className="templates">
        {cards.map((card, index) => (
          <Card
            key={index}
            card={card}
            onCardLike={() => onCardLike(card)}
            onCardClick={() => onCardClick(card)}
            onCardDelete={() => onCardDelete(card)}
          />
        ))}
      </section>
    </main>
  );
}

export default Main;
