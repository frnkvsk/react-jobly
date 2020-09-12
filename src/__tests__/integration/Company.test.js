import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render, screen } from '../../test-data/test-utils';
import Company from '../../pages/Company';

// smoke and appearance tests
test('renders Company ', () => {
  render(<Company />);
  // expect(screen.getAllByText(/...Loading/i)[0]).toBeInTheDocument();
});

// snapshot test
// test('matches snapshot', () => {
//   const { asFragment } = render(<Company />);
//   expect(asFragment()).toMatchSnapshot();
// });