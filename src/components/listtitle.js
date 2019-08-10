import React from 'react'
import ListForm from './listform'

const ListTitle = (props) => {

  const {uid, list, slist, lid, title, setShowEdit, showEdit, setSlist, setShowUpdate, showUpdate, deleteList, updateList,} = props

  return (
    <>

      <div key={lid}>
        <h3>{title}</h3>
        <span
          onClick={() => {
            setShowEdit(!showEdit)
          }}>{
            showEdit ? 'close':'edit'}
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
            X</span>
          </>
        }



      </div>

    </>
  )
}

export default ListTitle
