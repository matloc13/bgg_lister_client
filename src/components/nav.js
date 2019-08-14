import React, { useState, } from 'react'
import { Link } from 'react-router-dom'
import { BASE_URL } from '../constants'
import Login from './login'
import SignUp  from './signup'


const Nav = (props) => {

  const { user, setUser, toggle,} = props
  const [login, setLogin] = useState(false)
  const [signin, setSignin] = useState(false)

  const signupUser = (fi) => {
    fetch(`${BASE_URL}/users`, {
      body: JSON.stringify(fi),
      method: 'POST',
      headers: {
        'Accept': 'application/json, plain/text, */*',
        'Content-Type': 'application/json'
      }
    })
    .then(res => res.json())
    .then(json => console.log(json))
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

  return (
    <nav
      className={"navbar clearfix"}>
      <h3 onClick={() => {
        toggle()
      }}>
        BGG-lister
      </h3>
      {
        user &&
        <span>
          {user.user.username}
        </span>
      }
      {user ?
        <Link to="/"
          onClick={() => {
            localStorage.clear()
          }}>Logout</Link>:
        <>
          {
            login ?

              <Login
                handleSubmit={getUser}
                type={true}
                setSwitch={setLogin}
                switchval={login}

              /> : <span onClick={() => {
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
              /> : <span onClick={() => {
                setSignin(!signin)
              }}>Sign In</span>
          }
        </>
      }
    </nav>
  )
}

export default Nav
