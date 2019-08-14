import React, { useState, useEffect, } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { BASE_URL } from './constants'
import { UserProvider } from './context/usercontext'
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.min.css'
import Nav from './components/nav'
import DropMenu from './components/dropmenu'
import Main from './components/main'
import HotList from './components/hotlist'
import Lists from './components/lists'
import List from './components/list'
import Footer from './components/footer'
import './css/main.css'


toast.configure({
  autoClose: 6000,
  draggable: false
})


function App() {

  const [user, setUser] = useState()
  const [username, setUsername] = useState()
  const [hotlist, setHotlist] = useState([])
  const [list, setList] = useState([])
  const [slist, setSlist] = useState({})
  const [dropMenuShow, setDropMenuShow] = useState(false)

  useEffect(() => {
    console.log('did load')
    getHotList()
    if (localStorage.getItem("user") !== null) {
      console.log('hi');
       setUser(JSON.parse(localStorage.getItem("user")))
    }
    return () => {
      console.log('clear hot list');
    }
  },[])

useEffect(() => {
  // console.log(user);
  localStorage.setItem("user", JSON.stringify(user))
  if (user){
      notify(`Welcome ${user.user.username}`)
  }
},[user])

  const getHotList = () => {
    fetch(`${BASE_URL}/hotlists`)
    .then(res => res.json())
    .then(json => setHotlist(json))
    .then(notify('welcome to Bgg Lister!'))
    .catch(err => console.error(err))
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
            <DropMenu />
          }

          <Switch>

            <Route
              path="/matlocsolo"
              render={(props) =>
                <Main />}
            />

            <Route
              path="/" exact
              render={(props) =>
                <HotList {...props}
                  hotlist={hotlist}
                  list={list}
                  slist={slist}
                  setList={setList}
                />}
            />
            {
              user &&
              <Route
                path="/myLists"
                render={(props) =>
                  <Lists {...props}
                    list={list}
                    setList={setList}
                    slist={slist}
                    setSlist={setSlist}
                  />}
              />
            }

            <Route
              path="/listsgame"
              render={(props) =>
                <List {...props}
                  slist={slist}
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
