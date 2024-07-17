import React from "react";
import api from "../../src/utils/api";

export const CurrentUserContext = React.createContext();

export const getUserInfoApi = (currentUser) => {
  api
    .getUserInfo()
    .then((data) => {
      currentUser(data);
    })
    .catch((err) => {
      console.error(err);
    });
};
