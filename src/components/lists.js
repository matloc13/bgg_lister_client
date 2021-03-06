import React, {
  useState,
  useEffect,
  useContext,
} from 'react'
import {
  BASE_URL
} from '../constants'
import UserContext from '../context/usercontext';
import ListForm from './listform';
import ListTitle from './listtitle'


// props
const Lists = (props) => {
  const user = useContext(UserContext)
  const uid = user.user.id

  const {
    list,
    setList,
    slist,
    setSlist,
    getLists,
  } = props
  // state
  const [showEdit, setShowEdit] = useState(false)
  const [showUpdate, setShowUpdate] = useState(false)



  useEffect(() => {
    if (user) {
      getLists(uid)
    }

  }, [])

  useEffect(() => {
    console.log(list);
  })

  // requests


  const updateList = (event, fi, uid, lid) => {
    event.preventDefault()
    fetch(`${BASE_URL}/users/${uid}/listnames/${lid}`, {
        body: JSON.stringify(fi),
        method: 'PUT',
        headers: {
          'Accept': 'application/json, plain/text',
          'Content-Type': 'application/json'
        }
      })
      .then(res => getLists(uid))
      .catch(err => console.error(err))
  }

  const deleteList = (event, uid, lid) => {
    fetch(`${BASE_URL}/users/${uid}/listnames/${lid}`, {
        method: 'DELETE',
        headers: {
          'Accept': 'application/json, text/plain',
          'Content-Type': 'application/json'
        }
      })
      .then(json => {
        const li = list.filter((ele) => ele.id !== lid)
        setList(li)
        getLists(uid)
      })
      .catch(err => console.error(err))
  }

  return (


    <
    div className = {
      "listsContainer"
    } >
    <
    div >

    {
      showUpdate &&
      <
      >
      <
      ListForm
      list = {
        slist
      }
      handleSubmit = {
        updateList
      }
      /> <
      span onClick = {
        () => {

          setShowUpdate(!showUpdate)
        }
      } >
      close < /span> <
      />
    } <
    /div>

    <
    div className = {
      "listContainer"
    } > {
      list ? list.map((ele) => {
        return ( <
          div key = {
            ele.id
          }
          className = {
            'listTitle'
          } >
          <
          ListTitle uid = {
            uid
          }
          list = {
            ele
          }
          slist = {
            slist
          }
          lid = {
            ele.id
          }
          title = {
            ele.title
          }
          setShowEdit = {
            setShowEdit
          }
          showEdit = {
            showEdit
          }
          setSlist = {
            setSlist
          }
          setShowUpdate = {
            setShowUpdate
          }
          showUpdate = {
            showUpdate
          }
          deleteList = {
            deleteList
          }
          updateList = {
            updateList
          }
          />

          <
          /div>
        )
      }) : < div > < h3 > You currently have no lists. < /h3></div >

    }

    <
    /div> <
    /div>

  )
}

export default Lists