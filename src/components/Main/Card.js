import React from "react";
import "./Cards.css";
import bucketButton from "../../images/trash.png";

function Card({ card, onCardClick }) {
  const likesCount = card && card.likes ? card.likes.length : 0;

  const handleClick = (card) => {
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
      <button className="templates__card_remove-button">
        <img src={bucketButton} alt="trash bucket image" />
      </button>
      <div className="templates__card__description-container">
        <h2 className="templates__card__description">{card.name}</h2>
        <button className="templates__card-button"></button>
        <p className="templates__card-likes-count">{likesCount}</p>
      </div>
    </div>
  );
}

export default Card;
