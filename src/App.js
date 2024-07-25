import React from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import Footer from "./components/Footer/Footer";
import api from "../src/utils/api";
import PopupWithForm from "./components/Main/PopupWithForm";
import ImagePopup from "./components/Main/ImagePopup";
import { CurrentUserContext } from "./contexts/CurrentUserContext";
import EditProfilePopup from "./components/Main/EditProfilePopup";
import EditAvatarPopup from "./components/Main/EditAvatarPopup";
import { CardContextRender } from "./contexts/CardContextRender";
import AddPlacePopup from "./components/Main/AddPlacePopup";
import DeleteConfirmation from "./components/Main/DeleteConfirmationPopup";

//#########################################################
function App() {
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] =
    React.useState(false);
  const [isDeletePopup, setDeletePopup] = React.useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] =
    React.useState(false);
  const { currentUser, setCurrentUser } = React.useContext(CurrentUserContext);
  const [selectedCard, setSelectedCard] = React.useState(null);
  const [cardToDelete, setCardToDelete] = React.useState(null);
  //#########################################################

  const { cards, setInitialCards } = React.useContext(CardContextRender);

  const handleCardLike = (card) => {
    const isLiked = card.likes.some((i) => i._id === currentUser._id);

    api
      .changeLikeCardStatus(card._id, !isLiked)
      .then((newCard) => {
        setInitialCards((state) =>
          state.map((c) => (c._id === card._id ? newCard : c))
        );
      })
      .catch((err) => {
        console.error(err);
      });
  };

  const handleCardDelete = (cardToDelete) => {
    api
      .deleteCard(cardToDelete.card._id)
      .then(() => {
        setInitialCards((prevCards) =>
          prevCards.filter((card) => card._id !== cardToDelete.card._id)
        );
        setDeletePopup(false);
      })
      .catch((err) => {
        console.error(err);
      });
  };

  //#########################################################
  const handleEditProfileClick = () => {
    setIsEditProfilePopupOpen(true);
  };

  const handleAddPlaceClick = () => {
    setIsAddPlacePopupOpen(true);
  };

  const handleEditAvatarClick = () => {
    setIsEditAvatarPopupOpen(true);
  };

  const handleCardClick = (card) => {
    setSelectedCard(card);
  };
  const handleDeletePopup = (card) => {
    setCardToDelete(card);
    setDeletePopup(true);
  };
  const closeAllPopups = () => {
    setIsEditAvatarPopupOpen(false);
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setSelectedCard(false);
    setDeletePopup(false);
    setCardToDelete(null);
  };

  const handleUpdateUser = ({ name, about }) => {
    api
      .patchUserInfo({ name, about })
      .then((updatedUser) => {
        setCurrentUser(updatedUser);
        setIsEditProfilePopupOpen(false);
      })
      .catch((error) => {
        console.error("Error updating user:", error);
      });
  };

  const handleUpdateAvatar = ({ avatar }) => {
    api.userAvatar({ avatar }).then((updateAvatar) => {
      setCurrentUser(updateAvatar);
      setIsEditAvatarPopupOpen(false);
    });
  };

  const handleAddPlaceSubmit = ({ name, link }) => {
    api.postNewCard({ name, link }).then((newCard) => {
      setInitialCards([newCard, ...cards]);
      setIsAddPlacePopupOpen(false);
    });
  };
  //#########################################################
  return (
    <div className="App">
      <div className="page">
        <Header />
        <Main
          onEditProfileClick={handleEditProfileClick}
          onAddPlaceClick={handleAddPlaceClick}
          onEditAvatarClick={handleEditAvatarClick}
          onCardClick={handleCardClick}
          cards={cards}
          onCardLike={handleCardLike}
          onCardDelete={handleDeletePopup}
        />
        <Footer />
        <EditProfilePopup
          isOpen={isEditProfilePopupOpen}
          onClose={closeAllPopups}
          onUpdateUser={handleUpdateUser}
        />

        <ImagePopup card={selectedCard} onClose={closeAllPopups}></ImagePopup>
        <AddPlacePopup
          isOpen={isAddPlacePopupOpen}
          onClose={closeAllPopups}
          onAddPlaceSubmit={handleAddPlaceSubmit}
        ></AddPlacePopup>

        <EditAvatarPopup
          isOpen={isEditAvatarPopupOpen}
          onClose={closeAllPopups}
          onUpdateAvatar={handleUpdateAvatar}
        ></EditAvatarPopup>

        <DeleteConfirmation
          isOpen={isDeletePopup}
          onClose={closeAllPopups}
          onDeleteCard={handleCardDelete}
          card={cardToDelete}
        ></DeleteConfirmation>
      </div>
    </div>
  );
}

export default App;
