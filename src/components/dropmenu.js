import React, { useContext} from 'react'
import { Link } from 'react-router-dom'

import UserContext from '../context/usercontext'

const DropMenu = () => {

const user = useContext(UserContext)

  return (
    <div className={"dropNav"}>
      {

        user ?
          <>
            <span>
              {/* <Link to="/matlocsolo" className={"link"}>
                Solitaire
              </Link> */}
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
          </>
        : <span className={"link"}>"Login to make a list!"</span>

          }


    </div>
  )
}

export default DropMenu
