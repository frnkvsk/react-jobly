import {useState, useEffect } from 'react';

export const useLocalStorage = (key) => {
  let ls = JSON.parse(localStorage.getItem(key)) || "";
  const [token, setToken] = useState(ls);
  useEffect(() => {    
    localStorage.setItem(key, JSON.stringify(token) || "");
    console.log('useLocalStorage state=',token)
  }, [token, key]);
  return {token, setToken};
}