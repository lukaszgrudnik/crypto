import React from 'react';
import { render, screen } from '@testing-library/react';
import { App } from './app';

jest.mock(
  'market/Market',
  () => ({
    __esModule: true,
    default: () => <div data-testid="market">Market Component</div>,
  }),
  { virtual: true },
);

test('renders Market component', async () => {
  render(<App />);
  const market = await screen.findByTestId('market');
  expect(market).toBeInTheDocument();
});
