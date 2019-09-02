import React, {useEffect,} from 'react'
import { Link } from 'react-router-dom';


const DropListItem = (props) => {

  const {list, setList, slist, setSlist, title, uid, lid,} = props

  useEffect(() => {
    console.log(list)
  })
  return (
<>
  {
    list.user_id === uid &&

    <>
      <span>
        <Link
          to="/listsgame"
          onClick={() => {
            setSlist(list)
          }}>
          <h5>{title}</h5>
        </Link>
      </span>
    </>

  }
</>
)}

export default DropListItem;
