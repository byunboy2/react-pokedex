import _ from "underscore";
import Pokedex from "./Pokedex";
import React from "react"


interface ProfileInterface {
  id: number,
  name: String,
  type: String,
  base_experience: number
}

interface PropsInterface {
  pokemons: ProfileInterface[]
}



const Pokegame: React.FC<PropsInterface> = ({pokemons}) =>{
  const shuffledList = _.shuffle(pokemons);

  const hand1 = shuffledList.slice(0, 4);
  let score1 = 0;
  hand1.forEach(p => score1 += p.base_experience);

  const hand2 = shuffledList.slice(4);
  let score2 = 0;
  hand2.forEach(p => score2 += p.base_experience);

  return (
    <div>
      <h3>Hand 1</h3>
      <Pokedex pokemons={hand1} score={score1} isWinner = {score1>score2 ? true:false}/>
      <h3>Hand 2</h3>
      <Pokedex pokemons={hand2} score={score2} isWinner = {score2>score1 ? true:false}/>
    </div>
  );
}

export default Pokegame;