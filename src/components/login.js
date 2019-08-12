import React, {useState, useEffect,} from 'react'
import Input from './input';

const Login = (props) => {

  const { user, setUser, handleSubmit,type, } = props
  const [inputs, setInputs] = useState({username: '', password: ''}
  )

  const handleChange = (event) => {
  event.persist()
  setInputs({ ...inputs, [event.target.name]: event.target.value })
}

const userSubmit = (event) => {
  event.preventDefault()
  const fi = {user: {
    username: inputs.username,
    password: inputs.password,
  }}

  // console.log(fi);
  handleSubmit(event, fi)
  // setInputs({
  //   username: '',
  //   password: ''
  // })
}
  return (
    <form onSubmit={userSubmit}>
      <Input
        name={"username"}
        type={"text"}
        value={inputs.username}
        handleChange={handleChange}
      />
      <Input
        name={"password"}
        type={"text"}
        value={inputs.password}
        handleChange={handleChange}

      />

      <Input
        type={"submit"}
        value={ type? "Login" : "Create User"}
      />
    </form>
  )
}

export default Login
