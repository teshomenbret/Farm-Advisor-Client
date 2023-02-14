import { render, screen} from '@testing-library/react';
import Help from '../help.pages'

test('should render correctly', () => {
  render(<Help/>);
  const h1Element = screen.getByText(/FAQ/)
  expect(h1Element).toBeInTheDocument()

});
