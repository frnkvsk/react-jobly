import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render, screen } from '../../test-data/test-utils';
import Home from '../../pages/Home';

// smoke and appearance tests
test('renders Home ', async() => {
  render(<Home />);
  
  expect(screen.getByText(/jobly/i)).toBeInTheDocument();

  expect(screen.getByText(/all the jobs in one, convenient place./i)).toBeInTheDocument();

  expect(screen.getByRole('button', {name: /log in \/ sign up/i})).toBeInTheDocument();
});


// snapshot test
test('matches snapshot', () => {
  const { asFragment } = render(<Home />);
  expect(asFragment()).toMatchSnapshot();
});