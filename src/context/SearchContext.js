import React, { createContext } from 'react';
// import React, { useState, createContext } from 'react';

const SearchContext = createContext();
const { Provider } = SearchContext;

const SearchProvider = ({ children }) => {

  // const [searchState, setSearchState] = useState({
  //   search: "",
  // });
  let searchState = {search: ""}

  const setSearchInfo = ( search ) => {
    // setSearchState( search );
    searchState = search;
    console.log('SearchContent setSearchInfo search=',search);
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
