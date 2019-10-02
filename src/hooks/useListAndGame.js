import { useState, useEffect,} from 'react';
import { BASE_URL } from '../constants';

const useListAndGame = (game,) => {

const [list, setList] = useState('')

useEffect(() => {
  listAndGame(game.game, game.user.user.id, game.title)
},[game])


  const listAndGame = ( game, uid, title) => {
console.log(game)
console.log(title)
    fetch(`${BASE_URL}/users/${uid}/listnames`, {
      method: 'POST',
      body: JSON.stringify({listname: {
        title: title,
        nu_game: game
      }
      }),
      headers: {
        'Accept': 'application/json, text/plain, */*',
        'Content-Type': 'application/json'
      }
    })
    .then(res => res.json)
    .then(json => console.log(json))
    // .then(setShowList(!showList))
    .then(setList(''))
    .catch(err => console.error(err))
  }
[list]
}

export default useListAndGame;
