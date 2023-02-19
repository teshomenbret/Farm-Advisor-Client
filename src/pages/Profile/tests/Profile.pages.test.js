import { render, screen} from '@testing-library/react';

import Profile from '../Profile.pages'

test('renders t the greeter ui correctly', () => {

  render(<Profile/>); 
  expect(screen.getByText(/Phone/i)).toBeInTheDocument()

});


test('renders t the button correctly', () => {
    render(<Profile/>);
    expect(screen.getByText(/Terms and Conditions/i)).toBeInTheDocument()  
});