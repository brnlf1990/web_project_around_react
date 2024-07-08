import React from "react";
import "./App.css";
import closeButton from "./images/Close_Icon.png";
import Header from "./components/Header/Header";
import { Main, PopupWithForm } from "./components/Main/Main";
import Footer from "./components/Footer/Footer";
function App() {
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] =
    React.useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] =
    React.useState(false);
  const handleEditProfileClick = () => {
    setIsEditProfilePopupOpen(true);
  };

  const handleAddPlaceClick = () => {
    setIsAddPlacePopupOpen(true);
  };

  const handleEditAvatarClick = () => {
    setIsEditAvatarPopupOpen(true);
  };

  // Manipulador de evento para fechar os pop-ups
  const handlePopupClose = () => {
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setIsEditAvatarPopupOpen(false);
  };
  return (
    <div className="App">
      <div className="page">
        <Header />
        <Main
          onEditProfileClick={handleEditProfileClick}
          onAddPlaceClick={handleAddPlaceClick}
          onEditAvatarClick={handleEditAvatarClick}
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

        {/* <PopupWithForm
          name="popup__image-container"
          title=""
          isOpen={"popup__image-container"}
          onClose={handlePopupClose}
        >
          <img src="#" alt="#" className="popup__image-zoom" />

          <span className="popup__image-close-button popup__close-button">
            <img
              src={closeButton}
              className="popup__image-close-image"
              alt="close image"
            />
          </span>

          <span className="popup__image-title"></span>
        </PopupWithForm> */}

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
  );
}

export default App;
