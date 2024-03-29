import "./Pokemon.css"
import React from "react"

interface PropsInterface {
  id: number,
  name: String,
  type: String,
  baseExperience: number
}

const Pokemon:React.FC<PropsInterface> = ({ name, id, type, baseExperience }) =>{
  return (
    <div className="Pokemon-card">
      <h5 className="Pokemon-header">{name}</h5>
      <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`}/>
      <div>Type:{type}</div>
      <div>EXP:{baseExperience}</div>
    </div>
  )
}
// add alt to img tag
export default Pokemon;