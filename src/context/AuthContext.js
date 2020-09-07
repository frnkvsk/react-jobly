import React, { useState, createContext } from 'react';

const AuthContext = createContext();
const { Provider } = AuthContext;

const useLogin = () => {
  let ls = JSON.parse(localStorage.getItem("token")) || "";
  const [token, setToken] = useState(ls);

  const setTokenStorage = (newToken) => { 
    setToken(newToken);
    localStorage.setItem("token", JSON.stringify(newToken) || "");
  }
  return {token, setTokenStorage};
}

const useUserInfo = () => {
  let ls = JSON.parse(localStorage.getItem("userInfo")) || "";
  const [userInfo, setUserInfo] = useState(ls);
  const setUserInfoStorage = (newUserInfo) => { 
    setUserInfo(newUserInfo);
    localStorage.setItem("userInfo", JSON.stringify(newUserInfo) || "");
  };
  return {userInfo, setUserInfoStorage};
}

const AuthProvider = ({ children }) => {
  const { token, setTokenStorage } = useLogin();
  const { userInfo, setUserInfoStorage } = useUserInfo();
  const [authState, setAuthState] = useState({
    token: token,
    userInfo: userInfo,
  });
  const setAuthInfo = ({ token, userInfo }) => {
    setTokenStorage(token);
    setUserInfoStorage(userInfo);
    setAuthState({
      token,
      userInfo,      
    });
  }
  return (
    <Provider
      value={
        {
          authState,
          setAuthState: authInfo => setAuthInfo(authInfo),
        }
      }
      >
        {children}
      </Provider>
  )
}

export { AuthContext, AuthProvider };