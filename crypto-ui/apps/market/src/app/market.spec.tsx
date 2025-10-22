import React from 'react';
import { render, screen } from '@testing-library/react';
import Market from './market';

describe('Market component', () => {
  test('renders Market text', () => {
    render(<Market />);

    // Check that the text "Market" is rendered
    const marketElement = screen.getByText(/Market/i);
    expect(marketElement).toBeInTheDocument();
  });
});
