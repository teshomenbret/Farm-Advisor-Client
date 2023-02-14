import { render, fireEvent, screen} from '@testing-library/react';
import FAQCard from '../fqaCard.componet'

test('should render correctly', () => {
    const faq = {
        "question":"Question",
        "ansower":"ansower"
    }
  render(<FAQCard faq ={faq} />  );
  const p1Element = screen.getByText(/Question/i)
  expect(p1Element).toBeInTheDocument()

});

test('should listen to the change', () => {
    const faq =     {
        "question":"Question",
        "ansower":"ansower"
    }
  render(<FAQCard faq ={faq} />  );
  const p1Element = screen.getByText(/Question/i)
  expect(p1Element).toBeInTheDocument()
  const toggleButton = screen.getByRole("button")
  expect(toggleButton).toBeInTheDocument()
  
  fireEvent.click(toggleButton)
  const answerElement = screen.getByText(/ansower/i)
  expect(answerElement).toBeInTheDocument()

});
