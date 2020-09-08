import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render, screen } from '../../src/test-data/test-utils';
import { testData } from '../../src/test-data/fake-data';
import CompanyCard from '../../src/components/CompanyCard';

// smoke and appearance tests
test('renders CompanyCard ', async() => {
  render(<CompanyCard company={testData.companies[0]}/>);

  expect(screen.getByText(/Test Company 1/i)).toBeInTheDocument();

  expect(screen.getByText(/Test description 1/i)).toBeInTheDocument();  
});

// snapshot test
test('matches snapshot', () => {
  const { asFragment } = render(<CompanyCard company={testData.companies[0]}/>);
  expect(asFragment()).toMatchSnapshot();
});