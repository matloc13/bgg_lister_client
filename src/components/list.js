import React, {useContext,useEffect,useState,} from 'react'
import UserContext from '../context/usercontext'
import {
  BASE_URL
} from '../constants';
// import Game from './game';

const List = (props) => {

  const user = useContext(UserContext)



  const [gameList, setGameList] = useState()


  useEffect(() => {
    getList()
  }, [])

  const {slist,} = props
  // console.log(slist);

  const addClass = (gid) => {
let item = document.querySelectorAll('.gamelistItem')
item.forEach((ele) =>{
  if (ele.id === gid) {
    console.log(gid);
  }
})
  }

  const getList = () => {
    fetch(`${BASE_URL}/users/${user.user.id}/listnames/${slist.id}/games`)
      .then(res => res.json())
      .then(json => setGameList(json))
      .catch(err => console.error(err))
  }

const destroyListItem = (gid) => {
  fetch(`${BASE_URL}/users/$${user.user.id}/listnames/${slist.id}/games/${gid}`, {
    method: 'DELETE',
    headers: {
      'Accept': 'application/json, text/plain',
      'Content-Type': 'application/json'
    }
  })
  .then(json =>  {
    const gi = gameList.filter((ele) => ele.id !== gid)
    setGameList(gi)
  })
}


  return (
    <>
      <div className={"gamelist"}>
        <h3> {
          slist.title
        } </h3> {
          slist &&
          gameList &&
          gameList.map((ele) => {
            return (
              slist.id === ele.listname_id &&

                <div className={
                  "gamelistItem"
                }>
                  <span onClick={() => {
                    destroyListItem(ele.id)
                  }}>X</span>
                  {ele.name}
                  {/* <span onClick={() => {
                    addClass(ele.id)
                    }}
                  >strikethrough</span> */}


                  </div>
          )
        })
    } </div>
  </>
  )
}

export default List
