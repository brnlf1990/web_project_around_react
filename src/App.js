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

function App() {
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] =
    React.useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] =
    React.useState(false);
  const { currentUser, setCurrentUser } = React.useContext(CurrentUserContext);
  const [selectedCard, setSelectedCard] = React.useState(null);

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

  // Manipulador de evento para fechar os pop-ups
  const closeAllPopups = () => {
    setIsEditAvatarPopupOpen(false);
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setSelectedCard(false);
  };

  const handleUpdateUser = ({ name, about }) => {
    api
      .patchUserInfo({ name, about })
      .then((updatedUser) => {
        setCurrentUser(updatedUser);
        setIsEditProfilePopupOpen(false); // Fecha o popup após a atualização
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

  return (
    <div className="App">
      <div className="page">
        <Header />
        <Main
          onEditProfileClick={handleEditProfileClick}
          onAddPlaceClick={handleAddPlaceClick}
          onEditAvatarClick={handleEditAvatarClick}
          onCardClick={handleCardClick}
        />
        <Footer />
        <EditProfilePopup
          isOpen={isEditProfilePopupOpen}
          onClose={closeAllPopups}
          onUpdateUser={handleUpdateUser}
        />

        <ImagePopup card={selectedCard} onClose={closeAllPopups}></ImagePopup>

        <PopupWithForm
          name="add-popup__container"
          title="Novo local"
          isOpen={isAddPlacePopupOpen}
          onClose={closeAllPopups}
        >
          <input
            type="text"
            name="title"
            placeholder="Título"
            className="popup__form-input add-popup__form-input"
            id="popup__card-title-insert"
            minLength="2"
            maxLength="30"
            required
          />
          <span className="popup__card-title-insert-error"></span>
          <input
            type="url"
            name="image"
            placeholder="Link da imagem"
            className="popup__form-input add-popup__form-input"
            id="popup__link-insert"
            required
          />
          <span className="popup__link-insert-error"></span>
        </PopupWithForm>

        <EditAvatarPopup
          isOpen={isEditAvatarPopupOpen}
          onClose={closeAllPopups}
          onUpdateAvatar={handleUpdateAvatar}
        ></EditAvatarPopup>

        {/* <PopupWithForm
          name="card-delete"
          title="Tem certeza?"
          isOpen={"card-delete"}
          onClose={handlePopupClose}
        ></PopupWithForm> */}
      </div>
    </div>
  );
}

export default App;
