import { Promise } from "core-js";
export class Api {
  constructor({ baseUrl, headers }, popupElements) {
    this._baseUrl = baseUrl;
    this._headers = headers;
  }

  getUserInfo() {
    return fetch(`${this._baseUrl}/users/me`, {
      headers: this._headers,
    }).then((res) => {
      if (res.ok) {
        return res.json();
      }

      return Promise.reject(`Error: ${res.status}`);
    });
  }

  getInitialCards() {
    return fetch(`${this._baseUrl}/cards`, {
      headers: this._headers,
    }).then((res) => {
      if (res.ok) {
        return res.json();
      }

      return Promise.reject(`Error: ${res.status}`);
    });
  }
}

const api = new Api({
  baseUrl: "https://around.nomoreparties.co/v1/web-ptbr-cohort-10",
  headers: {
    authorization: "ddda171a-2bb7-46e7-9726-3c7c72f035dd",
    "Content-Type": "application/json",
  },
});

export default api;
