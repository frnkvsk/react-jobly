import React, { createContext } from 'react';

const SearchContext = createContext();
const { Provider } = SearchContext;

const SearchProvider = ({ children }) => {
  let searchState = {search: ""}

  const setSearchInfo = ( search ) => {
    searchState = search;
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
