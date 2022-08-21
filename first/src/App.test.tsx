import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const wrapper = screen.getByTestId("app-header");
  expect(wrapper).toBeInTheDocument();
});