import React from 'react';
import { render } from '@testing-library/react'

import { Thing } from '../src/Thing'

describe('Thing', () => {
  it('renders without crashing', () => {
    const {getByText} = render(<Thing>Hello</Thing>)
    const helloNode = getByText('Hello')
    expect(helloNode).toBeInTheDocument()
  });
});