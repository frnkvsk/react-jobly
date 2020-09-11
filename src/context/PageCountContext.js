import React, { createContext, useState } from 'react';

const PageCountContext = createContext();
const { Provider } = PageCountContext;

const PageCountProvider = ({ children }) => {
  
  const [pageContext, setPageState] = useState({
    pagesTotal: 0,
    pageCurr: 0,
  });

  const setPageInfo = (newPageContext ) => {   
    setPageState(newPageContext);
  }; 

  return (    
    <Provider
      value={
        {
          pageContext,
          setPageContext: pc => setPageInfo(pc),
        }
      }
      >
      {children}
    </Provider>
  )
}
export { PageCountContext, PageCountProvider };
