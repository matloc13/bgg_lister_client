import React from 'react'
import { Link } from 'react-router-dom'

const DropMenu = () => {
  return (
    <div className={"dropNav"}>
      <span>
        <Link to="/matlocsolo" className={"link"}>
          solitaire
        </Link>
      </span>
      <span>
        <Link to="/" className={"link"}>
          hot list
        </Link>
      </span>
      <span>
        <Link to="/myLists" className={"link"}>
          my lists
        </Link>
      </span>
    </div>
  )
}

export default DropMenu
