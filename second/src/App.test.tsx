import { render, screen } from '@testing-library/react';
import React from 'react';
import App from './App';

test('renders learn react link', () => {
    render(<App />);
    const linkElement = screen.getByText(/Workflow React Second App/i);
    expect(linkElement).toBeInTheDocument();
  });

  test('renders test id', () => {
    render(<App />);
    const wrapper = screen.getByTestId("app2-header");
    expect(wrapper).toBeInTheDocument();
  });