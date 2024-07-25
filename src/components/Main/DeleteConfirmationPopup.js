import React from "react";
import PopupWithForm from "./PopupWithForm";

function DeleteConfirmation() {
  return (
    <PopupWithForm
      name="card-delete"
      title="Tem certeza?"
      isOpen={"card-delete"}
      onClose={handlePopupClose}
    ></PopupWithForm>
  );
}

export default DeleteConfirmation;
