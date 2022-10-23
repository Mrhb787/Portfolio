import {createContext, useState, useEffect} from "react";

export const UserContext = createContext();

const localUser = "abhishekworks787-portfolio-user";

export const CurrentUserProvider = (props) => {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem(localUser)));

  // update any changes made in use context to local storage
  useEffect(() => {
    localStorage.setItem(localUser, JSON.stringify(user));
  }, [user]);

  return (
    <UserContext.Provider value={[user, setUser]}>
      {props.children}
    </UserContext.Provider>
  );
};
