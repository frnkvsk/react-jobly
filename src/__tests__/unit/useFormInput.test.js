import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render, screen } from '@testing-library/react';
import { useFormInput } from '../../hooks/useFormInput';
import userEvent from '@testing-library/user-event';

const TestComponent = () => {  
  const username = useFormInput('');

  return (
    <form>
      <input id="user" type="text" {...username} aria-label="test-input" />
    </form>
  )
}
const setup = () => {
  const utils = render(<TestComponent />);
  const input = utils.getAllByLabelText('test-input');

  return {
    input,
    ...utils,
  }
}
describe('useFormInput tests', () => {  
  it('useFormInput sets state', async () => {    
    const input = setup();
    await userEvent.type(screen.getByRole('textbox'), 'testusername');
    expect(input.input[0].value).toBe('testusername');
  });
  
});

