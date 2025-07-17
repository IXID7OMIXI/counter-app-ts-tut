import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Counter App heading', () => {
  render(<App />);
  const heading = screen.getByText(/Counter App/i);
  expect(heading).toBeInTheDocument();
});

test('renders Found it! button', () => {
  render(<App />);
  const button = screen.getByText(/Found it!/i);
  expect(button).toBeInTheDocument();
});
