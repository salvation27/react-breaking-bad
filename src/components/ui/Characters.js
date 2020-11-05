import React from 'react'
import CharacterItem from './CharacterItem'
import Loading from './Loading'

const Characters = ({items,isLoading}) => {

//  выводит спинер пока грузятся данные

  return isLoading ? 
  (<Loading />) 
  : 
  (
  <section className='cards'>
    {items.map((el,i)=>(
      <CharacterItem item={el} key={i} />
    ))}
  </section>
  )
}


export default Characters