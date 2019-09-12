import React, { useState, useEffect,} from 'react'
import { BASE_URL } from '../constants'

const Game = (props) => {

  const {lookup, name, i, } = props

  const [currentGame, setCurrentGame] = useState()
  const [showDesc, setShowDesc] = useState(false)
  const [showPub, setShowPub] = useState(false)

  useEffect(() => {
    if (i <= 30 || i === undefined ) {
      searchGame(lookup)
    }
      return (setCurrentGame())
  },[lookup])

  useEffect(() => {
    console.log(currentGame)

  },[currentGame])


  const searchGame = (id) => {
    fetch(`${BASE_URL}/bgg_lists/${id}`)
    .then(res => res.json())
    .then(json => setCurrentGame(json))
    .catch(err =>  console.error(err))
  }

  return (
    <div className={"gameContainer"}>
      {
        currentGame ?
          <>
            {
              currentGame.items &&
              currentGame.items.item.name.value ?
                <div>
                  <img src={currentGame.items.item.thumbnail} alt={currentGame.items.item.name.value}/>
                  <h3>
                    { currentGame.items.item.image &&
                      currentGame.items.item.image ?
                        <a
                          href={
                          currentGame.items.item.image}
                          target={"_blank"}>

                          {currentGame.items.item.name.value}
                        </a>
                      :''}
                  </h3>
                </div>
              :

              currentGame.items.item.name[0].value &&
              <div>
                <img src={currentGame.items.item.thumbnail} alt={currentGame.items.item.name[0].value}/>
                <h3>
                  {currentGame.items.item.image &&
                    currentGame.items.item.image ?
                      <a
                        href={currentGame.items.item.image}
                        target={"_blank"}>
                        {currentGame.items.item.name[0].value}
                      </a>
                    : ''}
                </h3>
              </div>
            }
            {
              currentGame.items.item.link.map((ele) => {
                return (
                  ele.type==="boardgamedesigner" ?
                    <p>Designer: {ele.value}</p>
                  : ''

                )}
              )
            }
            <h5 onClick={()=> {
              setShowPub(!showPub)
            }}>{!showPub ? 'Publishers' : 'hide'}</h5>
            {
              showPub &&
              currentGame.items.item.link.map((ele) => {
                return (
                  ele.type === "boardgamepublisher" ?
                    <p>Publisher: {ele.value}</p>
                  : ''

                )}
              )
            }

            <h6>Year Published:
              {
                currentGame.items.item.yearpublished &&
                currentGame.items.item.yearpublished.value ?
                  currentGame.items.item.yearpublished.value
                : ''
              }
            </h6>
            <span onClick={() => {setShowDesc(!showDesc)}}>{!showDesc ? 'description' : 'close'}</span>

            {
              showDesc &&
              <p className={"description"}>{currentGame.items.item.description
                .replace(/&hellip;/g, '...')
                .replace(/&#10;/g,' ')
                .replace(/&rsquo;/g, '\'')
                .replace(/&ndash;/g, ':')
                .replace(/&mdash;/g, '-')
                .replace(/&quot;/g,'"')
                .replace(/&nbsp;/g, ' ')
                .replace(/&amp;/g, '&')
                .replace(/&rdquo;/g, '\"')
                .replace(/&ldquo;/g, '\"')
              }</p>
            }
          </>
        :''
      }
      {/* <hr/> */}
    </div>
  )
}

export default Game
