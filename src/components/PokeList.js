import React from 'react'
import PokeCell from './PokeCell';
import PokeClasses from './PokeClasses'
import './styles/PokeList.css'

const PokeList = () => {
  const cells = PokeClasses.map(pokeClass => {
      return ( <
          PokeCell key = {
              pokeClass.id
          }
          pokeClass = {
              pokeClass
          }
          handleOnClick = {
              
          }
          />
      )
  })
  return (
    <section className="poke-list">
        {cells}
    </section>
  )
}


export default PokeList;
