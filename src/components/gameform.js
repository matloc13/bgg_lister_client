import React, { useState, useEffect, useContext, } from 'react'
import UserContext from '../context/usercontext'
// import Select from './select'
import { BASE_URL } from '../constants'
import { toast } from 'react-toastify'
import Select from 'react-select'
import Input  from './input'

const GameForm = (props) => {

const user = useContext(UserContext)

const {handleSubmit, game, slist, list, setList, } = props

const options =
  list.map((ele) => {
    return (
      ele.user_id === user.user.id &&
      { value: ele.id, label: ele.title }
  )})

const[inputs, setInputs] = useState({
  name: game.name.value,
  img: game.thumbnail.value,
  bggid: game.id,
})
const [selectedOption, setSelectedOption] = useState(null)

useEffect(() => {
  getLists(user.user.id)
  console.log(list)
},[])

useEffect(() => {
  console.log(selectedOption)
  console.log(options);
},[selectedOption])


const getLists = () => {
  fetch(`${BASE_URL}/users/${user.user.id}/listnames`)
  .then(res => res.json())
  .then(json => setList(json))
  .catch(err => console.error(err))
}

const gameSubmit = (event) => {
  event.preventDefault()
  notify(`${inputs.name} added to ${selectedOption.label}`)
  const fi = {
    name: inputs.name,
    img: inputs.img,
    bggid: inputs.bggid
  }
  handleSubmit(event, fi, user.user.id, selectedOption.value)
}

const handleChange = (event) => {
  setInputs({...inputs, [event.target.name]: event.target.value})
}

const handleSelect = (selectedOption) => {
  setSelectedOption(selectedOption)
}

const notify = (item) => {
  toast(`${item}`)
}

  return (
    <>
      <form onSubmit={gameSubmit} id={"gameForm"}>
        <fieldset>
          <label htmlFor="lists">List</label>

          <Select
            options={options}
            onChange={handleSelect}
            value={selectedOption}
          />

          <input
            type={"hidden"}
            name={"name"}
            value={inputs.name}
            handleChange={handleChange}/>

          <input
            type={"hidden"}
            name={"img"}
            value={inputs.img}
            handleChange={handleChange}/>

          <input
            type={"hidden"}
            name={"bggid"}
            value={inputs.bggid}
            handleChange={handleChange}/>

          <Input
            type={"submit"}
            value={"add game"}
          />
        </fieldset>

      </form>


  </>
  )
}

export default GameForm
