import React from "react";
import api from "../../src/utils/api";

export const CurrentUserContext = React.createContext();

//Esta sendo usado no App.js como fetchCurrentUser .
export const currentUser = (setCurrentUser) => {
  api
    .getUserInfo()
    .then((data) => {
      setCurrentUser(data);
    })
    .catch((err) => {
      console.error(err);
    });
};
