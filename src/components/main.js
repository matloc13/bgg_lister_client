import React, { useState, useEffect, } from 'react'
import { BASE_URL } from '../constants';
import Game from './game'

const Main = () => {

    const [games, setGames] = useState()

  useEffect(() => {
    getSolitaireList()
  },[])

  const getSolitaireList = () => {
    fetch(`${BASE_URL}/bgg_lists`)
    .then(res => res.json())
    .then(json => setGames(json))
    .catch(err => console.error(err))
  }


  return (
<main>
  <h2>matloc's solo picks</h2>
  {
    games &&
    games.geeklist.item.map((ele, index) => {
      return (
        <article key={index}>
          <Game
            name={ele.objectname}
            lookup={ele.objectid}
          />
        </article>
      )
    })
  }</main>
  )
}

export default Main
