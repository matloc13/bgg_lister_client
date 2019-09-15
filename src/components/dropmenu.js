import React, { useEffect, useContext} from 'react'
import { Link } from 'react-router-dom'
import DropListItem from './dropmenuItem'

import UserContext from '../context/usercontext'

const DropMenu = (props) => {

const user = useContext(UserContext)
const uid = user.user.id

const {list, setList, slist, setSlist, getLists,} = props

useEffect(() => {
  console.log(list)
  console.log(uid);
  if (user) {
    getLists(uid)
  }

},[])

  return (
    <div className={"dropNav"}>
      <b></b>
      <b className={"big"}></b>
      <Link
        to="/search"
        className={"link"}
      ><h5>search</h5>
      </Link>

      {
        user ?

          <div className={"listNames"}>

            <span>
              <Link to="/myLists" className={"link"}>
                <h3>Lists</h3>
              </Link>
            </span>
            {
              list &&
              list.map((ele) => {
                return (
                  <>
                    <DropListItem
                      uid={uid}
                      list={ele}
                      slist={slist}
                      lid={ele.id}
                      title={ele.title}
                      setSlist={setSlist}
                    />
                  </>
                )
              })

              }
            </div>

        : <span className={"link"}>"Login to make a list!"</span>

          }


    </div>
  )
}

export default DropMenu
