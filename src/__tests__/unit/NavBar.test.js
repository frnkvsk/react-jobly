import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render, screen, fireEvent } from '../../test-data/test-utils';
import NavBar from '../../components/NavBar';
import App from '../../App';

// smoke and appearance tests
test('renders NavBar ', async() => {
  render(<NavBar />)
  
  expect(screen.getByText(/login \/ signup/i)).toBeInTheDocument(); 

  // fireEvent does't cause error
  fireEvent.click(screen.getByRole('button', {name: /login \/ signup/i}));

  expect(screen.getByRole('link', {name: /jobly/i})).toBeInTheDocument();

  // fireEvent does't cause error
  fireEvent.click(screen.getByRole('link', {name: /jobly/i}));
  
});

// test NavBar through App 
test('link and button changes App appearance ', async() => {
  render(<App />)
  
  expect(screen.getByText(/login \/ signup/i)).toBeInTheDocument();
  
  fireEvent.click(screen.getByRole('button', {name: /login \/ signup/i}));

  expect(screen.getByText(/username/i)).toBeInTheDocument();
  
  fireEvent.click(screen.getByRole('link', {name: /jobly/i}));

  expect(screen.getByText(/All the jobs in one, convenient place./i)).toBeInTheDocument();
});


// snapshot test
test('matches snapshot', () => {
  const { asFragment } = render(<NavBar />);
  expect(asFragment()).toMatchSnapshot();
});