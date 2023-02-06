import { render, screen } from '@testing-library/react';
import App from './App';
import React from "react"

describe("App component", ()=>{
  test('renders', () => {
    render(<App />);
  });
  test('renders correct text context', () => {
    const{container} = render(<App />);
    expect(container.textContent).toContain("Pokedex");
    expect(container.textContent).toContain("Hand 1");
    expect(container.textContent).toContain("Hand 2");
    expect(container.textContent).toContain("THIS HAND WINS");
    expect(container.textContent).toContain("Total Score")
  });
})
