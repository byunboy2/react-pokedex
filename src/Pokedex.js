import Pokemon from './Pokemon.js';
import './Pokedex.css';
function Pokedex({ pokemons, score, isWinner }) {
  return (
    <div className="Pokemon-section">
      <div>Total Score: {score}</div>
      {pokemons.map(pokemon => <Pokemon
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