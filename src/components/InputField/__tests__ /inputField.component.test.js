import { render, screen} from '@testing-library/react';
import InputField from '../inputField.component';

test('cheack if the requerd input work correct', () => {
    const  handleNameChange= ()=> {
        console.log("handleNameChange")
    }
    const name =""
  render(<InputField data-testid="required-input" label = "Farm Name" onChange={handleNameChange} name='name' value={name} required/>  );
  const inputElement = screen.getByTestId('required-input')
  expect(inputElement).toBeRequired()
});

test('cheack if the label correct', () => {
    const  handleNameChange= ()=> {
        console.log("handleNameChange")
    }
    const name =""
  render(<InputField data-testid="required-input" label = "Farm Name" onChange={handleNameChange} name='name' value={name} required/>  );
  const labelElement = screen.getByText('Farm Name')
  expect(labelElement).toBeVisible()
//   expect(labelElement).not.toBeVisible()

});
