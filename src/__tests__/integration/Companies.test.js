import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render, screen } from '../../test-data/test-utils';
import Companies from '../../pages/Companies';

// smoke and appearance tests
test('renders Companies ', async() => {
  render(<Companies />);
  
  expect(screen.getByPlaceholderText(/search for companies/i)).toBeInTheDocument();
  
  expect(screen.getByText(/search/i)).toBeInTheDocument();
  
  expect(screen.getByText(/...Loading/i)).toBeInTheDocument();
  
  expect(screen.getByText(/page: 1/i)).toBeInTheDocument();
});


// snapshot test
// test('matches snapshot', () => {
//   const { asFragment } = render(<Companies />);
//   expect(asFragment()).toMatchSnapshot();
// });