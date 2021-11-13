import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';
import React from 'react'
import '@testing-library/jest-dom/extend-expect'


test('button has correct initial color', () => {
  render(<App />);
  const colorButton = screen.getByRole('button',{name:/change to blue/i});
  expect(colorButton).toHaveStyle({backgroundColor:'red'});
});

test('button turns blue when clicked', () => {
  render(<App />);
  const colorButton = screen.getByRole('button',{name:/change to blue/i});
  fireEvent.click(colorButton);
  expect(colorButton).toHaveStyle({backgroundColor:'blue'});
})

test('button disbable when checkbox is clicked', () => {
  render(<App />);
  const checkbox = screen.getByRole('checkbox');
  const colorButton = screen.getByRole('button',{name:/change to blue/i})
  expect(checkbox).not.toBeChecked();
  fireEvent.click(checkbox);
  expect(checkbox).toBeChecked();
  expect(colorButton).toBeDisabled();
})

test('button should enable when checkbox is unchecked', () => {
    render(<App/ >);
    const checkbox = screen.getByRole('checkbox');
    const colorButton = screen.getByRole('button',{name:/change to blue/i});
    expect(checkbox).not.toBeChecked();
    expect(colorButton).toBeEnabled();
})

test('button turns grey when disabled', () => {
  render(<App />)
  const colorButton = screen.getByRole('button',{name:/change to blue/i});
  const checkbox = screen.getByRole('checkbox',{name:'Disable button'});

  expect(colorButton).toHaveStyle({backgroundColor:'red'})
  fireEvent.click(checkbox);
  expect(colorButton).toHaveStyle({backgroundColor:'grey'})
  fireEvent.click(checkbox);
  fireEvent.click(colorButton);
  expect(colorButton).toHaveStyle({backgroundColor:'blue'});
  fireEvent.click(checkbox);
  expect(colorButton).toHaveStyle({backgroundColor:'grey'})
  
})
