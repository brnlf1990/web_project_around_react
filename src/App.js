import React from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import Footer from "./components/Footer/Footer";
import api from "../src/utils/api";
import PopupWithForm from "./components/Main/PopupWithForm";
import ImagePopup from "./components/Main/ImagePopup";
import {
  CurrentUserContext,
  getUserInfoApi,
} from "./contexts/CurrentUserContext";

function App() {
  const [userData, setUserData] = React.useState("");
  const [currentUser, setCurrentUser] = React.useState("");
  const [card, setInitialCards] = React.useState([]);
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] =
    React.useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] =
    React.useState(false);
  React.useEffect(() => {
    api
      .getUserInfo()
      .then((data) => {
        setUserData(data);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  React.useEffect(() => {
    api
      .getInitialCards()
      .then((data) => {
        setInitialCards(data);
      })
      .catch((err) => {
        console.error(err);
      });
  }, [card]);
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
  const handlePopupClose = () => {
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setIsEditAvatarPopupOpen(false);
    setSelectedCard(false);
  };
  return (
    <CurrentUserContext.Provider value={getUserInfoApi[currentUser]}>
      <div className="App">
        <div className="page">
          <Header />
          <Main
            onEditProfileClick={handleEditProfileClick}
            onAddPlaceClick={handleAddPlaceClick}
            onEditAvatarClick={handleEditAvatarClick}
            onCardClick={handleCardClick}
            userData={userData}
            cards={card}
          />
          <Footer />
          <PopupWithForm
            name="popup__container"
            title="Editar perfil"
            isOpen={isEditProfilePopupOpen}
            onClose={handlePopupClose}
          >
            <input
              type="text"
              name="name"
              placeholder="Nome"
              className="popup__form-input"
              id="popup__name-insert"
              minLength="2"
              maxLength="40"
              required
            />
            <span className="popup__name-insert-error"></span>
            <input
              type="text"
              name="about"
              placeholder="Sobre mim"
              className="popup__form-input"
              id="popup__aboutMe-insert"
              minLength="2"
              maxLength="200"
              required
            />
            <span className="popup__aboutMe-insert-error"></span>
          </PopupWithForm>

          <ImagePopup
            card={selectedCard}
            onClose={handlePopupClose}
          ></ImagePopup>

          <PopupWithForm
            name="add-popup__container"
            title="Novo local"
            isOpen={isAddPlacePopupOpen}
            onClose={handlePopupClose}
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

          <PopupWithForm
            name="photo-update-popup__container"
            title="Alterar a foto do perfil"
            isOpen={isEditAvatarPopupOpen}
            onClose={handlePopupClose}
          >
            <input
              type="url"
              name="image"
              placeholder="Link da imagem"
              className="popup__form-input photo-update-popup__form-input"
              id="popup__link-photo"
              required
            />
            <span className="popup__link-photo-error"></span>
          </PopupWithForm>

          {/* <PopupWithForm
          name="card-delete"
          title="Tem certeza?"
          isOpen={"card-delete"}
          onClose={handlePopupClose}
        ></PopupWithForm> */}
        </div>
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
