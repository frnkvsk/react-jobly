import React, { useContext } from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render, screen } from '@testing-library/react';
import { SearchContext, SearchProvider } from '../../context/SearchContext';

const TestComponent = () => {
  const search = useContext(SearchContext);
  search.setSearchState({
    search: 'test search'
  });

  return (
    <div>
      <div>{search.searchState.search}</div>
    </div>
  )
}

describe('SearchContext tests', () => {  
  it('SearchContext sets state', () => {
    render(<SearchProvider><TestComponent /></SearchProvider>);
    expect(screen.getByText('test search')).toBeInTheDocument();
  })
  
});

