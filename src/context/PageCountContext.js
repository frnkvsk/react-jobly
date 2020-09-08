import React, { createContext, useState, useMemo } from 'react';

const PageCountContext = createContext();
const { Provider } = PageCountContext;

const PageCountProvider = ({ children }) => {
  
  const [pageContext, setPageState] = useState({
    pagesTotal: 0,
    pageCurr: 0,
  });

  const setPageInfo = (newPageContext ) => {   
    console.log('setPageInfo', newPageContext) 
    setPageState(newPageContext);
  };   
  
  // const setPageInfo = ( {pagesTotal, pageCurr} ) => {
  //   const  newPageContext = {pagesTotal, pageCurr};
  //   useMemo(() => {
  //     setPageState(newPageContext);
  //   }, [pagesTotal, pageCurr]);    
  // }

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
