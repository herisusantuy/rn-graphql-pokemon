import React, { createContext, useEffect, useState } from 'react';
// import { useMMKV } from 'react-native-mmkv';
import type { FC, PropsWithChildren } from 'react';

import { logout, authenticate } from '../services/auth';
import { useAppDispatch, useAppSelector } from '../store/hooks';
import { login } from '../store/reducers/authReducer';
import { AUTH_TOKEN_KEY } from '../utils/consts/auth';

type AuthContextProps = {
  loading: boolean;
  token: string;
  login: (email: string, password: string) => void;
  logout: () => void;
};

export const AuthContext = createContext<AuthContextProps>(
  {} as AuthContextProps
);

const AuthProvider: FC<PropsWithChildren> = ({ children }) => {
  const [loading, setLoading] = useState<boolean>(true);
  // const mmkv = useMMKV();
  const authState = useAppSelector(state => state.auth);
  const dispatch = useAppDispatch();

  const handleLogin = (email: string, password: string) => {
    authenticate(email, password).then(result => {
      // mmkv.set(AUTH_TOKEN_KEY, result.token);
      dispatch(login(result.token));
    });
  };

  const handleLogout = () => {
    logout().then(() => {
      // mmkv.delete(AUTH_TOKEN_KEY);
    });
  };

  const handleCheckAuthentication = () => {
    // const token = mmkv.getString(AUTH_TOKEN_KEY);
    const token = 'asdfasdf';
    if (token) {
      dispatch(login(token));
    }
    setLoading(false);
  };

  useEffect(() => {
    handleCheckAuthentication();
  }, []);
  return (
    <AuthContext.Provider
      value={{
        loading,
        token: authState.token,
        login: handleLogin,
        logout: handleLogout
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
