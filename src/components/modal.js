import React from 'react'
import Game from './game';

const Modal = (props) => {

  const { lookup,  modal, setModal } = props

  return (
    <div className={"modal"}>
      <div className={"modal-box"}>
        <div onClick={() => {
          setModal(!modal)
        }}>X</div>
        <Game
          lookup={lookup}
        />

        {/* {lookup} */}
      </div>
    </div>
  )
}

export default Modal
