import { render, screen} from '@testing-library/react';

import TermsAndConditions from '../TermsAndConditions.pages'

test('renders t the greeter ui correctly', () => {

  render(<TermsAndConditions/>); 
  expect(screen.getByText(/Lorem ipsum dolor/i)).toBeInTheDocument()

});


test('renders t the button correctly', () => {
    render(<TermsAndConditions/>);
    expect(screen.getByRole("button", {name : /AGREE TO TERMS AND CONDITIONS/i})).toBeInTheDocument()
  });