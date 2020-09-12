import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render, screen } from '../../test-data/test-utils';
import Profile from '../../pages/Profile';

// smoke and appearance tests
test('renders Profile ', async() => {
  render(<Profile />);
  
  expect(screen.getAllByText(/profile/i)[0]).toBeInTheDocument();
  
  expect(screen.getByText(/confirm password/i)).toBeInTheDocument();

  expect(screen.getByRole('button', {name: /update profile/i})).toBeInTheDocument();
});

// snapshot test
// test('matches snapshot', () => {
//   const { asFragment } = render(<Profile />);
//   expect(asFragment()).toMatchSnapshot();
// });