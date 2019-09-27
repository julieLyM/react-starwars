import React, { useState, useEffect } from 'react'
import {Link} from 'react-router-dom'
export default function Character() {

useEffect(() => {
  fetchItem();
},
[])

const [item, setItem] = useState([])


  const fetchItem = async () =>{
    const data = await fetch('https://melroune.github.io/starwars-api/api/all.json')
    const item = await data.json()
    console.log(item)
    setItem(item)
  }



  return (
    <div>
      <h1>Liste des personnages</h1>

        <form>
          <input
          />
          <button>
            click
        </button>
        </form>

      {item.map(items => (
        <ul key={items.id}>
          <li >
            <Link to={`/character/${items.id}`}>
              {items.name}
            </Link>
          </li>
        </ul>
      ))}
    </div>
  )
}
