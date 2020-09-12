import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render, screen } from '../../test-data/test-utils';
import Page404 from '../../pages/Page404';

// smoke and appearance tests
test('renders Page404 ', async() => {
  render(<Page404 />);
  
  expect(screen.getByText(/404 page not found/i)).toBeInTheDocument();  
});

// snapshot test
// test('matches snapshot', () => {
//   const { asFragment } = render(<Page404 />);
//   expect(asFragment()).toMatchSnapshot();
// });