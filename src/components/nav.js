import React, { useState, } from 'react'
import { Link } from 'react-router-dom'
import { BASE_URL } from '../constants'
import { toast } from 'react-toastify'
import Login from './login'


const Nav = (props) => {


  const {  user, setUser, toggle,} = props
  const [login, setLogin] = useState(false)
  const [signin, setSignin] = useState(false)



  const signupUser = (event, fi) => {
    fetch(`${BASE_URL}/users`, {
      body: JSON.stringify(fi),
      method: 'POST',
      headers: {
        'Accept': 'application/json, plain/text, */*',
        'Content-Type': 'application/json'
      }
    })
    .then(res => res.json())
    .then(json => console.log(json.user))
    // .then(json => setUser(json.user))
    .then(setSignin(!signin))
    .catch(err => console.error(err))
  }

  const getUser = (event, fi) => {
  console.log(fi)
    fetch(`${BASE_URL}/users/login`, {
      body: JSON.stringify(fi),
      method: 'POST',
      headers: {
        'Accept': 'application/json, plain/text, */*',
        'Content-Type': 'application/json'
      }
    })
    .then(res => res.json())
    .then(json => setUser(json))
    .catch(err => console.error(err))
  }

  const notify = (item) => {
    toast(`${item}`)
  }

  return (
    <nav
      className={"navbar clearfix"}>
      <Link to={"/hot"}>
        <h1>
          BGG-lister
        </h1>
      </Link>


      {

        user &&
        <span onClick={() => {
          toggle()
        }}>
          {user.user.username}
        </span>

      }
      <b></b>
      {user ?
        <Link
          to={"/hot"}
          className={"logout link"}
          onClick={() => {
            localStorage.clear()
            window.location.reload(true)
          }}
        >Logout</Link>:
        <>
          {
            login ?

              <Login
                handleSubmit={getUser}
                type={true}
                setSwitch={setLogin}
                switchval={login}

              /> : <span
                className={"user"}
                onClick={() => {
                  setLogin(!login)
                }}>Login</span>
          }

          {
            signin ?

              <Login
                handleSubmit={signupUser}
                type={false}
                setSwitch={setSignin}
                switchval={signin}
              /> : <span
                className={"logout"}
                onClick={() => {
                  setSignin(!signin)
                }}>Sign Up</span>
          }
        </>
      }
    </nav>
  )
}

export default Nav
