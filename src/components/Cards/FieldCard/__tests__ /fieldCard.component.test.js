import { render, fireEvent, screen} from '@testing-library/react';
import FieldCard from '../fieldCard.component';

test('should render correctly', () => {
    const field =     {
        "name":"name",
        "ansower":"ansower"
    }

  render(<FieldCard field = {field}/> );
  const p1Element = screen.getByText(/name/i)
  expect(p1Element).toBeInTheDocument()

});
