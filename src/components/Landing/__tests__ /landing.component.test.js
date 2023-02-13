import { render, screen} from '@testing-library/react';
import Landing  from '../landing.component'

import farm_image from '../../../asset/farm.svg'

test('renders the greeter correctly', () => {
    const  farm= ()=> {
        console.log("farm")
    }

  render(<Landing image={farm_image} btn_action={farm} btn_text= "create my first farm" title = "Welcome to Agino" paragraph="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed id pellentesque nulla. Donec porta pretium risus vitae ultrices."/>);
  const h1Element = screen.getByText(/Welcome to Agino/)
  expect(h1Element).toBeInTheDocument()
  const buElement = screen.getByRole("button", {name : /create my first farm/})
  expect(buElement).toBeDefined
  expect(buElement).toBeChecked
});
