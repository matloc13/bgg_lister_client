import React, { useContext, useEffect, useState, } from 'react'
import UserContext from '../context/usercontext'
import {BASE_URL} from '../constants';
import Game from './game';

const List = (props) => {

  const user = useContext(UserContext)



  const [gameList, setGameList] = useState()

  useEffect(() => {
    getList()
  },[])

  const {slist,  } = props
  console.log(slist);

  const getList = () => {
    fetch(`${BASE_URL}/users/${user.user.id}/listnames/${slist.id}/games`)
    .then(res => res.json())
    .then(json => setGameList(json))
    .catch(err => console.error(err))
  }

  return (
    <>
      <h3>{slist.title}</h3>
      {
        slist &&
        gameList &&
        gameList.map((ele) => {
          return (
            slist.id === ele.listname_id &&

            <div>{ele.name}</div>
          )
        })
      }
    </>
  )
}

export default List
