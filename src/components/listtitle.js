import React from 'react'
import { Link } from 'react-router-dom';

const ListTitle = (props) => {

  const {uid, list, slist, lid, title, setShowEdit, showEdit, setSlist, setShowUpdate, showUpdate, deleteList, updateList,} = props

  return (
    <>
      {
        list.user_id === uid &&
        <div key={lid} className={"listTitleLinkContainer"}>

          <Link
            to="/listsgame"
            onClick={() => {
              setSlist(list)
            }}
          ><h3>{title}</h3></Link>

          <span
            onClick={() => {
              setShowEdit(!showEdit)
            }}>{
              showEdit ? 'close':'edit title'}
          </span>
          {
            showEdit &&

            <>
              <span onClick={() => {
                setSlist(list)
                setShowUpdate(!showUpdate)
              }}>
              update</span>

              <span onClick={() => {
                deleteList(list, uid, lid)
              }}>
              delete</span>

            </>
          }



        </div>
      }
    </>
  )
}

export default ListTitle
