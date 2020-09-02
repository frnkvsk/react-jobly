import { useState } from 'react';

export const useLogin = () => {
  let ls = JSON.parse(localStorage.getItem("token")) || "";
  const [token, setToken] = useState(ls);
  const setTokenStorage = (newToken) => { 
    setToken(newToken);
    localStorage.setItem("token", JSON.stringify(token) || "");
    console.log('useLogin token=',token)
  };
  return [token, setTokenStorage];
}