import React from 'react'
import { BASE_URL } from '../constants';
import Login from './login';
import SignUp  from './signup';

const Nav = (props) => {

  const { user, setUser, toggle,} = props

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
    <nav>
      <span onClick={() => {
        toggle()
      }}>
        menu
      </span>
      {
        user &&
        <span>
          {user.user.username}
        </span>
      }

      <Login
        handleSubmit={getUser}
        type={true}

      />

      {/* <SignUp
        handleSubmit={signupUser}
      /> */}

      <Login
        handleSubmit={signupUser}
        type={false}
      />

    </nav>
  )
}

export default Nav
