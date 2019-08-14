import React from 'react'
import { Link } from 'react-router-dom'

const DropMenu = () => {
  return (
    <div className={"dropNav"}>
      <span>
        <Link to="/matlocsolo">
          solitaire
        </Link>
      </span>
      <span>
        <Link to="/">
          hot list
        </Link>
      </span>
      <span>
        <Link to="/myLists">
          my lists
        </Link>
      </span>
    </div>
  )
}

export default DropMenu
