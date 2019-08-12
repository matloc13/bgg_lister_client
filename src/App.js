import React, { useState, useEffect, } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { BASE_URL } from './constants'
import { UserProvider } from './context/usercontext'
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.min.css'
import Nav from './components/nav'
import DropMenu from './components/dropmenu'
import Main from './components/main'
import HotList from './components/hotlist';
import Lists from './components/lists'
import Footer from './components/footer'
import './css/main.css'


toast.configure({
  autoClose: 8000,
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
    console.log('did load');
    getHotList()

      setUser(JSON.parse(localStorage.getItem("user")))
  if (user){
      notify(user.user.username)
  }

    return () => {
      console.log('clear hot list');
    }
  },[])

useEffect(() => {
  console.log(user);
  localStorage.setItem("user", JSON.stringify(user))
  if (user){
      notify(`welcome ${user.user.username}`)
  }
},[user])

  const getHotList = () => {
    fetch(`${BASE_URL}/hotlists`)
    .then(res => res.json())
    .then(json => setHotlist(json))
    .then(notify('welcome to Bgg lister!'))
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
          {/* <ToastContainer /> */}
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
          </Switch>

          <Footer />

        </div>

      </Router>
    </UserProvider>
  )
}

export default App
