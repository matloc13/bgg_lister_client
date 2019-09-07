import React, {useState, useEffect, useContext,} from 'react'
import {BASE_URL}  from '../constants'
import UserContext from '../context/usercontext'
import GameForm from './gameform'
import Modal from './modal';
// import Slider from './imageSlider/slider'

const HotList = (props) => {

  const user = useContext(UserContext)

  const { hotlist, uid, list, slist, setList, } = props

  const [cgame, setCGame] = useState()
  const [showForm, setShowForm] = useState(false)
  const [modal, setModal] = useState(false)

  const addGame = (event, game, uid, lid) => {
    fetch(`${BASE_URL}/users/${uid}/listnames/${lid}/games`, {
      body: JSON.stringify(game),
      method: 'POST',
      headers: {
        'Accept': 'application/json, text/plain',
        'Content-Type': 'application/json'
      }
    })
    .then(res => res.json())
    // .then(res => setGame([json, ...game]))
    // .then(res => console.log(json))
    .catch(err => console.error(err))
  }
  const listAndGame = (event, list, game, uid) => {

    fetch(`${BASE_URL}/users/${uid}/listnames`, {
      body: JSON.stringify({newList: {
        title: list.title,
        bggid: game.bggid,
        name: game.name,
        img: game.img
      }
      }),
    })
    .then(res => res.json)
    .then(json => console.log(json))
  }

  return (
    <div className={"hotlistContainer"}>
      {/* {
        hotlist.items &&
        <>
          <Slider
        images={hotlist.items.item}
          />
        </>
      } */}

      <h2>Hot 50</h2>

      {
        hotlist.items ?
          hotlist.items.item.map((ele, index) => {
            return (
              <>
                <div
                  key={index}
                  className={"hotlistItem"}>
                  <img
                    src={ele.thumbnail.value}
                    alt={ele.name.value}
                    onClick={() => {
                      setCGame(ele)
                      setModal(!modal)
                    }}
                  />
                  <span onClick={() => {
                    setCGame(ele)
                  }}>Rank: {ele.rank}</span>
                  {
                    user &&
                    <span
                      onClick={() => {
                        setCGame(ele)
                        setShowForm(!showForm)
                      }}
                    >add</span>
                  }

                </div>



                {
                  showForm &&
                  cgame.id === ele.id &&
                  <GameForm
                    handleSubmit={addGame}
                    game={ele}
                    uid={uid}
                    slist={slist}
                    list={list}
                    setList={setList}
                  />
                }
              </>
            )
          }):''
      }
      <div className={"modalContainer"}>
        {
          modal &&
          <Modal
            lookup={cgame.id}

            modal={modal}
            setModal={setModal}
          />
        }
      </div>
    </div>
  )
}

export default HotList
