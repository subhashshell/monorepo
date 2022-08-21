import { render, screen } from '@testing-library/react';
import React from 'react';
import Latest from './Latest';

test('renders learn react link', () => {
    render(<Latest />);
    const linkElement = screen.getByText(/Unit test work flow/i);
    expect(linkElement).toBeInTheDocument();
  });