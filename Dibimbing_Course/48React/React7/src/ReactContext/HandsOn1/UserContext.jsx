/* eslint-disable react/prop-types */
import {createContext, useState} from 'react'

const UserContext = createContext({
  user : null,
  setUser : () => {},
  successLogin : null,
  setSuccessLogin : () => {},
})

export {UserContext};

const UserProvider = ({children}) => {
  const [user, setUser] = useState("");
  const [successLogin, setSuccessLogin] = useState(false);
  const nilai = 100;

  return(
    <UserContext.Provider value={{user, setUser, successLogin, setSuccessLogin, nilai}}>
      {children}
    </UserContext.Provider>
  );
}

export default UserProvider;