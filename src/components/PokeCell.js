import React from 'react'
import './styles/PokeCell.css'
import sprites from '../assets/sprites.png';

const style = {
    backgroundImage: `url(${sprites})`,
    backgroundPosition
};

const PokeCell = ({ pokeClass, handleOnClick }) => {
  const { id, backgroundPosition } = pokeClass;
  style = {style}
  return <button style onClick={()=>handleOnClick(id)} className="poke-cell"></button>
};

export default PokeCell