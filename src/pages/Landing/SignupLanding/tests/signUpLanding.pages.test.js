import { render, screen} from '@testing-library/react';

import SignupLanding from '../signUpLanding.pages'
test('renders the greeter ui correctly', () => {

  render(<SignupLanding/>); 
  expect(screen.getByText(/Smart Farming/)).toBeInTheDocument()

});


test('renders the button correctly', () => {
    render(<SignupLanding/>);
    expect(screen.getByRole("button", {name : /SignUp with agino/})).toBeInTheDocument()
  });