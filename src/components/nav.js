import React from 'react'

const Nav = (props) => {
  const { user, toggle,} = props

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
          {user.username}
        </span>
      }


    </nav>
  )
}

export default Nav
