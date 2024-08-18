import { render, screen } from '@testing-library/react';
import { StringCalculator } from './calculator.view';

test('renders calculator view', () => {
  render(<StringCalculator />);
  const element = screen.getByText(/String Calculator/i);
  expect(element).toBeInTheDocument();
});
