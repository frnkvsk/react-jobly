import React, { useContext, useEffect } from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render, screen } from '@testing-library/react';
import { PageCountContext, PageCountProvider } from '../../context/PageCountContext';

const TestComponent = () => {
  const page = useContext(PageCountContext);
  const pagesTotal = 55, pageCurr = 3;
  useEffect(() => {
    page.setPageContext({
      pagesTotal: pagesTotal,
      pageCurr: pageCurr
    });
  }, [pagesTotal])
  

  return (
    <div>
      <div>{page.pageContext.pagesTotal}</div>
      <div>{page.pageContext.pageCurr}</div>
    </div>
  )
}

describe('PageCountContext tests', () => {  
  it('PageCountContext sets state', () => {
    render(<PageCountProvider><TestComponent /></PageCountProvider>);
    expect(screen.getByText('55')).toBeInTheDocument();
    expect(screen.getByText('3')).toBeInTheDocument();
  })
  
});

