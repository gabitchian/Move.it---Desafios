/* eslint-disable no-new */
/* eslint-disable no-restricted-properties */
import {
  createContext, ReactNode, useState,
} from 'react';

import firebase, { provider } from '../../config/fire-config';

interface User {
    displayName: string;
    email: string;
    photoURL: string;
    providerId: string;
    uuid: string;
}

interface AuthContextData {
    user: User | null;
    setLogin: () => void;
    setLogout: () => void;
}

interface AuthProviderProps {
    children: ReactNode;
}

export const AuthContext = createContext({} as AuthContextData);

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [user, setUser] = useState(null);

  const setLogin = () => {
    provider.addScope('repo');
    firebase
      .auth()
      .signInWithPopup(provider)
      .then((result) => {
        // The signed-in user info.
        setUser(result.user.providerData[0]);
        // ...
      })
      .catch((err) => alert('Problemas de conexão, tente novamente mais tarde!'));
  };

  const setLogout = () => {
    firebase.auth().signOut().then(() => {
      setUser(null);
    }).catch((error) => {
      console.error(error);
    });
  };

  return (
    <AuthContext.Provider value={{
      user,
      setLogin,
      setLogout,
    }}
    >
      {children}
    </AuthContext.Provider>
  );
};
