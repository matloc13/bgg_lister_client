import React, {useState, } from 'react'
import Input from './input';

const Login = (props) => {

  const {  handleSubmit,type, setSwitch, switchval,  } = props
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
    <form onSubmit={userSubmit} className={"logForm"}>
      <fieldset>
        <Input
          name={"username"}
          type={"text"}
          value={inputs.username}
          handleChange={handleChange}
        />

        <Input
          name={"password"}
          type={"password"}
          value={inputs.password}
          handleChange={handleChange}
        />

        <input
          type="submit"
          value={type? "Login": "Create User"}
        />
        <span onClick={() => {
          setSwitch(!switchval)
        }}>X</span>
      </fieldset>
    </form>
  )
}

export default Login
