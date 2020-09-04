import React, { createContext, useState } from 'react';

const SearchContext = createContext();
const { Provider } = SearchContext;

const SearchProvider = ({ children }) => {
  let [searchState, setSearchState] = useState({search: ""});

  const setSearchInfo = ( search ) => {
    setSearchState(search);
  }
  return (    
    <Provider
      value={
        {
          searchState,
          setSearchState: searchInfo => setSearchInfo(searchInfo),
        }
      }
      >
      {children}
    </Provider>
  )
}
export { SearchContext, SearchProvider };
