import { render, screen} from '@testing-library/react';

import SensorLanding from '../sensorLanding.pages'

test('renders the greeter ui correctly', () => {

  render(<SensorLanding/>); 
  expect(screen.getByText(/Add a field/)).toBeInTheDocument()

});


test('renders the button correctly', () => {
    render(<SensorLanding/>);
    expect(screen.getByRole("button", {name : /ADD my first SENSOR/})).toBeInTheDocument()
  });