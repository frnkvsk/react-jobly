import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render, screen } from '../../test-data/test-utils';
import Applications from '../../pages/Applications';

// smoke and appearance tests
test('renders Applications ', async() => {
  render(<Applications />);   
  
  expect(screen.getByPlaceholderText(/Search for jobs/i)).toBeInTheDocument();

  expect(screen.getByRole('button', {name: /search/i})).toBeInTheDocument();

  expect(screen.getByText(/You have no applications./i)).toBeInTheDocument();
});


// snapshot test
// test('matches snapshot', () => {
//   const { asFragment } = render(<Applications />);
//   expect(asFragment()).toMatchSnapshot();
// });