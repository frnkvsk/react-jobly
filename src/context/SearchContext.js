import React, { createContext, useState, useEffect } from 'react';

const SearchContext = createContext();
const { Provider } = SearchContext;

const SearchProvider = ({ children }) => {
  let [searchState, setSearchState] = useState({search: ""});

  const setSearchInfo = ( newSearch ) => {
    const {search} = newSearch;
    useEffect(() => {
      setSearchState(newSearch);
    }, [search]);    
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
