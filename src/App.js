import React, { useState, useEffect, } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { BASE_URL } from './constants'
import { UserProvider } from './context/usercontext'
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.min.css'
import Nav from './components/nav'
import DropMenu from './components/dropmenu'
import Home from './components/home'
import Main from './components/main'
import HotList from './components/hotlist'
import Search from './components/search';
import Lists from './components/lists'
import List from './components/list'
import Footer from './components/footer'
import './css/main.css'


toast.configure({
  autoClose: 3200,
  draggable: false
})

const  App = () => {

  const [user, setUser] = useState()
  const [hotlist, setHotlist] = useState([])
  const [list, setList] = useState([])
  const [slist, setSlist] = useState({})
  const [dropMenuShow, setDropMenuShow] = useState(false)

  useEffect(() => {
    console.log('did load')
    getHotList()

    if (!localStorage.getItem("user")) {
      console.log('storage empty');
    } else {
      console.log('local storage in use');
      try {
        setUser(JSON.parse(window.localStorage.getItem("user")))
      }catch (error) {
        console.error(error)
      }
      console.log('item from local');
    }
    return () => {
      console.log('clear hot list')
    }
  },[])

useEffect(() => {
console.log('trigger user side effect...');
if (user) {
  localStorage.setItem("user", JSON.stringify(user))
  console.log('user set');
}
  if (user){
      notify(`Welcome ${user.user.username}`)
  }
  return () => localStorage.clear()
},[user])

  const getHotList = () => {
    fetch(`${BASE_URL}/hotlists`)
    .then(res => res.json())
    .then(json => setHotlist(json))
    .then(notify('welcome to Bgg Lister!'))
    .catch(err => console.error(err))
  }

  const getLists = (uid) => {
    fetch(`${BASE_URL}/users/${uid}/listnames`)
    .then(res => res.json())
    .then(json => setList(json))
    .catch(err => alert('could not load'))
  }

  const toggle = () => {
    setDropMenuShow(!dropMenuShow)
  }

  const notify = (item) => {
    toast(`${item} `)
  }

  return (
    <UserProvider value={user}>
      <Router>

        <div className="App">
          <Nav
            toggle={toggle}
            user={user}
            setUser={setUser}
          />

          {
            dropMenuShow &&
            <DropMenu
              list={list}
              setList={setList}
              slist={slist}
              setSlist={setSlist}
              getLists={getLists}
            />
          }

          <Switch>

            <Route
              path="/" exact
              render={(props) =>
                <Home />
              }
            />

            <Route
              path="/matlocsolo"
              render={(props) =>
                <Main />}
            />

            <Route
              path="/hot"
              render={(props) =>
                <HotList {...props}
                  hotlist={hotlist}
                  list={list}
                  slist={slist}
                  setList={setList}
                />}
            />
            {
              user ?
                <Route
                  path="/myLists"
                  render={(props) =>
                    <Lists {...props}
                      getLists={getLists}
                      list={list}
                      setList={setList}
                      slist={slist}
                      setSlist={setSlist}
                    />}
                />: ''
            }

            <Route
              path="/listsgame"
              render={(props) =>
                <List {...props}
                  slist={slist}
                />}
            />
            <Route
              path="/search"
              render={(props) =>
                <Search {...props}
                  list={list}
                  slist={slist}
                  setSlist={setSlist}

                />}

            />
            }
          </Switch>

          <Footer />
        </div>
      </Router>
    </UserProvider>
  )
}

export default App
