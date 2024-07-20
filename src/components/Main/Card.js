import React from "react";
import "./Cards.css";
import bucketButton from "../../images/trash.png";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import { CardContextRender } from "../../contexts/CardContextRender";

function Card({ card, onCardClick }) {
  const { currentUser } = React.useContext(CurrentUserContext);
  const cardContextRender = React.useContext(CardContextRender);
  const isOwn = card.owner._id === currentUser._id;

  const cardDeleteButtonClassName = `templates__card_remove-button ${
    isOwn
      ? "templates__card_remove-button_visible"
      : "templates__card_remove-button_hidden"
  }`;
  const isLiked = card.likes.some((i) => i._id === currentUser._id);
  const cardLikeButtonClassName = `templates__card-button ${
    isLiked ? "templates__card-button-active" : "templates__card-button"
  }`;
  const likesCount = card && card.likes ? card.likes.length : 0;
  const handleClick = () => {
    onCardClick(card);
  };
  return (
    <div className="templates__card">
      <img
        alt="card images"
        className="templates-card__image"
        src={card.link}
        onClick={handleClick}
      />
      <button className={cardDeleteButtonClassName}>
        <img src={bucketButton} alt="trash bucket image" />
      </button>
      <div className="templates__card__description-container">
        <h2 className="templates__card__description">{card.name}</h2>
        <button className={cardLikeButtonClassName}></button>
        <p className="templates__card-likes-count">{likesCount}</p>
      </div>
    </div>
  );
}

export default Card;
