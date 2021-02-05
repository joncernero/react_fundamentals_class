import React, { useState, useEffect } from 'react'
import MortyChild from './MortyChild'
import { CardColumns } from 'reactstrap'

const MortyParent = () => {
  const [characters, setCharacters] = useState([])
  const fetchMorty = () => {
    const url = 'https://rickandmortyapi.com/api/character'
    fetch(url)
      .then(res => res.json())
      .then(json => {
        setCharacters(json.results)
        console.log(json.results)
      })
  }

  useEffect(() => {
    fetchMorty()
  }, [])

  const displayCards = () => {
    return characters.length > 0
      ? characters.map(character => <MortyChild mortyCharacter={character} />)
      : null
  }

  return (
    <div>
      <button onClick={fetchMorty}>Fetch Me</button>
      <CardColumns>{displayCards()}</CardColumns>
    </div>
  )
}

export default MortyParent
