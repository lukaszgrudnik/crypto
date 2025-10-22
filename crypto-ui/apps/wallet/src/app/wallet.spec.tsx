import React from 'react';
import { render, screen } from '@testing-library/react';
import Wallet from './wallet';

describe('Wallet component', () => {
  test('renders Wallet Component text', () => {
    render(<Wallet />);

    // Find the element by text
    const walletElement = screen.getByText(/Wallet Component/i);

    // Assert that it's in the document
    expect(walletElement).toBeInTheDocument();
  });
});
