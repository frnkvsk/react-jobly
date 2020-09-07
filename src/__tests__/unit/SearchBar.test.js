import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render, screen } from '../../test-data/test-utils';

import Search from '../../components/SearchBar';



// smoke and appearance tests
test('renders SearchBar ', () => {
  
  render(<Search nextPage={'jobs'} />);

  expect(screen.getByText(/search/i)).toBeInTheDocument(); 
  
  expect(screen.getByPlaceholderText(/search for jobs/i)).toBeInTheDocument(); 
  
});

// snapshot test
test('matches snapshot', () => {
  const { asFragment } = render(<Search nextPage={'jobs'}/>);
  expect(asFragment()).toMatchSnapshot();
});