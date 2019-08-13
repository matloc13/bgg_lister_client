import React, {useState, useEffect,} from 'react'
import {BASE_URL}  from '../constants'
import GameForm from './gameform'
import Modal from './modal';
import Slider from './imageSlider/slider'

const HotList = (props) => {

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
  return (
    <>
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
                  className={"hotlistContainer"}
                  onClick={() => {
                    setCGame(ele)
                    setShowForm(!showForm)
                  }}>
                  <img
                    src={ele.thumbnail.value} alt={ele.name.value}
                  />
                  <span onClick={() => {
                    setModal(!modal)
                  }}>Rank: {ele.rank}</span>
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
      {
        modal &&
        <Modal
          lookup={cgame.id}

          modal={modal}
          setModal={setModal}
        />
      }
    </>
  )
}

export default HotList
