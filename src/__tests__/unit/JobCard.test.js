import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render, screen } from '../../test-data/test-utils';
import JobCard from '../../components/JobCard';
import { testData } from '../../test-data/fake-data';


// smoke and appearance tests
test('renders JobCard ', async() => {
  render(<JobCard job={testData.jobs[0]}/>);
  
  expect(screen.getByText(/Editor, magazine features/i)).toBeInTheDocument();

  expect(screen.getByText(/0.115/i)).toBeInTheDocument();  
  
});


// snapshot test
// test('matches snapshot', () => {
//   const { asFragment } = render(<JobCard job={testData.jobs[0]}/>);
//   expect(asFragment()).toMatchSnapshot();
// });