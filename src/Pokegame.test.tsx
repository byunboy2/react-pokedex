import { render, screen } from '@testing-library/react';
import Pokegame from './Pokegame';
import React from "react"

const pokemons = [
    { id: 4, name: "Charmander", type: "fire", base_experience: 62 },
    { id: 7, name: "Squirtle", type: "water", base_experience: 63 },
    { id: 11, name: "Metapod", type: "bug", base_experience: 72 },
    { id: 12, name: "Butterfree", type: "flying", base_experience: 178 },
    { id: 25, name: "Pikachu", type: "electric", base_experience: 112 },
    { id: 39, name: "Jigglypuff", type: "normal", base_experience: 95 },
    { id: 94, name: "Gengar", type: "poison", base_experience: 225 },
    { id: 133, name: "Eevee", type: "normal", base_experience: 65 },
  ];


describe("App component", ()=>{
  test('renders', () => {
    render(<Pokegame pokemons= {pokemons}/>);
  });
  test('renders correct text context', () => {
    const{container} = render(<Pokegame pokemons={pokemons}/>);
    expect(container.textContent).toContain("Hand 1");
    expect(container.textContent).toContain("Hand 2");
    expect(container.textContent).toContain("THIS HAND WINS");
    expect(container.textContent).toContain("Total Score")
  });
  test('score changes when the page is refreshed', () => {
    const { container } = render(<Pokegame pokemons={pokemons} />);
    const initialScore1 = parseInt(container.textContent.match(/Hand 1.*Total Score: (\d+)/)[1]);
    const initialScore2 = parseInt(container.textContent.match(/Hand 2.*Total Score: (\d+)/)[1]);

    render(<Pokegame pokemons={pokemons} />);

    const updatedScore1 = parseInt(container.textContent.match(/Hand 1.*Total Score: (\d+)/)[1]);
    const updatedScore2 = parseInt(container.textContent.match(/Hand 2.*Total Score: (\d+)/)[1]);

    expect(initialScore1).not.toBe(updatedScore1);
    expect(initialScore2).not.toBe(updatedScore2)

  });
})
