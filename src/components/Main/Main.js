import React from "react";
import "./Cards.css";
import "./Profile.css";
import "./Popup.css";
import "./PopupCardDelete.css";
import "./PopupPhotoUpdate.css";
import "./Add-popup.css";
import profileEditButton from "../../images/avatarPencil.png";
import cardAddButton from "../../images/add__button_icon.jpg";
import bucketButton from "../../images/trash.png";
import closeButton from "../../images/Close_Icon.png";

function PopupWithForm({ name, title, isOpen, onClose, children }) {
  return (
    <div className={"popup"}>
      <div className={`popup__image-fade ${isOpen ? "active" : ""}`}></div>
      <div className={`popup ${name} ${isOpen ? "popup__opened" : ""}`}>
        <span className="popup__close-button" onClick={onClose}>
          <img src={closeButton} className="popup__close-image" alt="close" />
        </span>
        <h2 className="popup__title">{title}</h2>
        <form className="popup__form">
          {children}

          <button className="popup__submit-button" type="submit">
            Salvar
          </button>
        </form>
      </div>
    </div>
  );
}
function ImagePopup({ card, onClose }) {
  return (
    <div className="popup__image">
      <div className="popup__image-fade"></div>
      <div
        className={`popup popup__image-container ${
          card ? "popup__opened" : ""
        }`}
      >
        {card && (
          <img src={card.link} alt={card.name} className="popup__image-zoom" />
        )}
        <span className="popup__close-button" onClick={onClose}>
          <img
            src={closeButton}
            className="popup__image-close-image"
            alt="close image"
          />
        </span>
        <p className="popup__image-title">{card ? card.name : ""}</p>
      </div>
    </div>
  );
}
function Main({
  onEditProfileClick,
  onAddPlaceClick,
  onEditAvatarClick,
  onCardClick,
  userData,
  cards,
}) {
  return (
    <main className="content">
      <section className="profile">
        <div className="profile__container">
          <div className="profile__avatar">
            <img
              src={userData.avatar}
              alt="profile image"
              className="profile__avatar-image"
              onClick={onEditAvatarClick}
            />
          </div>

          <div className="profile__info">
            <h2 className="profile__info-name" id="profile__info_name">
              {userData.name}
            </h2>
            <h3 className="profile__info-content" id="profile__info_content">
              {" "}
              {userData.about}
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
        {cards.map((card) => (
          <div
            className="templates__card"
            key={card._id}
            onClick={() => onCardClick(card)}
          >
            <img
              alt="card images"
              className="templates-card__image"
              src={card.link}
              onClick={onCardClick}
            />
            <button className="templates__card_remove-button">
              <img src={bucketButton} alt="trash bucket image" />
            </button>
            <div className="templates__card__description-container">
              <h2 className="templates__card__description">{card.name}</h2>
              <button className="templates__card-button"></button>
              <p className="templates__card-likes-count">{card.likes.length}</p>
            </div>
          </div>
        ))}
      </section>
    </main>
  );
}

export { Main, PopupWithForm, ImagePopup };
