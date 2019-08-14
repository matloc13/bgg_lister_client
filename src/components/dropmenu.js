import React from 'react'
import { Link } from 'react-router-dom'

const DropMenu = () => {
  return (
    <div className={"dropNav"}>
      <span>
        <Link to="/matlocsolo" className={"link"}>
          Solitaire
        </Link>
      </span>
      <span>
        <Link to="/" className={"link"}>
          Hot List
        </Link>
      </span>
      <span>
        <Link to="/myLists" className={"link"}>
          My Lists
        </Link>
      </span>
    </div>
  )
}

export default DropMenu
