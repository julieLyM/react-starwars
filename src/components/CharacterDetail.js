import React, { useState, useEffect } from 'react'
import '../App.css';

export default function CharacterDetail({ match }) {

  useEffect(() => {
    fetchPoulet();
    console.log(match)
  },
    [])

  const [poulet, setPoulet] = useState([])

  const fetchPoulet = async () => {
    const fetchPoulet = await fetch(`https://melroune.github.io/starwars-api/api/id/${match.params.id}.json`)

    const poulet = await fetchPoulet.json()
    setPoulet(poulet)
    console.log(poulet)
  }

  return (
    <div>
      <p>characters starwars </p>
      <p>{poulet.name}</p>
      <p>
        <img
          src={poulet.image}
          className="charac-img"
          alt="image-personnage" />
      </p>
      <p>{poulet.wiki}</p>
    </div>
  )
}
