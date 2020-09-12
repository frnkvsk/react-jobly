import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render, screen } from '../../test-data/test-utils';
import Jobs from '../../pages/Jobs';

// smoke and appearance tests
test('renders Jobs ', async() => {
  render(<Jobs />);
  
  expect(screen.getByPlaceholderText(/search for jobs/i)).toBeInTheDocument();
  
  expect(screen.getByText(/search/i)).toBeInTheDocument();
  
  expect(screen.getByText(/...Loading/i)).toBeInTheDocument();
  
  expect(screen.getByText(/page: 1/i)).toBeInTheDocument();
});


// snapshot test
// test('matches snapshot', () => {
//   const { asFragment } = render(<Jobs />);
//   expect(asFragment()).toMatchSnapshot();
// });