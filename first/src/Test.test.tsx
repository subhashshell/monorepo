import { render, screen } from '@testing-library/react';
import React from 'react';
import App from './Test';

test('renders learn react link', () => {
    render(<App />);
    const linkElement = screen.getByText(/Unit test work flow/i);
    expect(linkElement).toBeInTheDocument();
  });