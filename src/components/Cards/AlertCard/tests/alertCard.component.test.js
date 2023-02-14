import { render, screen} from '@testing-library/react';
import AlertCard from '../alertCard.component';

test('should render correctly', () => {
    const alert = {
        "message":"alert message",
        "date":"11 May 2022"
    }
  render(<AlertCard alert = {alert}/>  );
  const p1Element = screen.getByText(/alert message/)
  const p2Element = screen.getByText(/11 May 2022/)

  expect(p1Element).toBeInTheDocument()
  expect(p2Element).toBeInTheDocument()

});
