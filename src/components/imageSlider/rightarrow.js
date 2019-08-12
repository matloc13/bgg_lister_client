import React from 'react';

const RightArrow = (props) => {

const { nextSlide, } = props

  return (
    <div className="rightArrow" onClick={()=> nextSlide()}>

      >
    </div>
  )
}

export default RightArrow
