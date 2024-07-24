import React, { memo } from "react";
import api from "../../src/utils/api";

export const CurrentUserContext = React.createContext();

export const CurrentUserProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = React.useState({});

  React.useEffect(() => {
    api
      .getUserInfo()
      .then((data) => {
        setCurrentUser(data);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);
  const memoHook = React.useMemo(
    () => ({ currentUser, setCurrentUser }),
    [currentUser, setCurrentUser]
  );
  return (
    <CurrentUserContext.Provider value={memoHook}>
      {children}
    </CurrentUserContext.Provider>
  );
};
