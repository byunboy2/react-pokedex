import Pokemon from './Pokemon';
import './Pokedex.css';
import React from "react"
import { v4 as uuidv4 } from 'uuid';

interface ProfileInterface {
  id: number,
  name: String,
  type: String,
  base_experience: number
}

interface PropsInterface {
  pokemons: ProfileInterface[],
  score: number,
  isWinner: Boolean
}


const Pokedex:React.FC<PropsInterface>= ({pokemons, score, isWinner}) =>{
  return (
    <div className="Pokemon-section">
      <div>Total Score: {score}</div>
      {pokemons.map(pokemon => <Pokemon
        key = {uuidv4()}
        name={pokemon.name}
        type={pokemon.type}
        id={pokemon.id}
        baseExperience={pokemon.base_experience} />)}
      <div>{isWinner === true && "THIS HAND WINS!"}</div>
    </div>
  );
}
// Render the pokemon {}
export default Pokedex;