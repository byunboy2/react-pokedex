import Pokemon from './Pokemon.js';
import './Pokedex.css';
function Pokedex({ pokemons }) {
  return (
    <div className="Pokemon-section">
      {pokemons.map(pokemon => <Pokemon
        name={pokemon.name}
        type={pokemon.type}
        id={pokemon.id}
        baseExperience={pokemon.base_experience} />)}
    </div>
  );
}
// Render the pokemon {}
export default Pokedex;