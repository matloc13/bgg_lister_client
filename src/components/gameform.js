import React, { useState, useEffect, useContext, } from 'react'
import UserContext from '../context/usercontext'
import Select from './select';
import { BASE_URL } from '../constants'
import Input  from './input';

const GameForm = (props) => {

const user = useContext(UserContext)

console.log(user)

const {handleSubmit, game, slist, list, setList, } = props

const[inputs, setInputs] = useState({
  name: game.name.value,
  img: game.thumbnail.value,
  bggid: game.id,
})
const [option, setOption] = useState()
const [lid, setLid] = useState()

useEffect(() => {
  getLists(user.user.id)
  console.log(list)
},[])

useEffect(() => {
  console.log(option);
},[option])

const getLists = () => {
  fetch(`${BASE_URL}/users/${user.user.id}/listnames`)
  .then(res => res.json())
  .then(json => setList(json))
  .catch(err => console.error(err))
}

const gameSubmit = (event) => {
  event.preventDefault()
  setLid(inputs.lists)
  const fi = {
    name: inputs.name,
    img: inputs.img,
    bggid: inputs.bggid
  }
  handleSubmit(event, fi, user.user.id, inputs.lists,)
}

const handleChange = (event) => {
  setInputs({...inputs, [event.target.name]: event.target.value})
}

  return (
    <>
      <form onSubmit={gameSubmit} id={"gameForm"}>
        <fieldset>
          <label htmlFor="lists">List</label>

          {/* <Select
            name={"lists"}
            user={user.user.id}
            slist={slist}
            setList={setList}
            list={list}
          /> */}

          <select name="lists" autoFocus form={"gameForm"}
            onChange={()=> setOption()} >
            {
              list.map((ele) => {
                return (
                  ele.user_id === user.user.id &&
                    <option value={ele.id} key={ele.id}>{ele.title}</option>
                )
              })
            }
          </select>

          <input
            type={"hidden"}
            name={"name"}
            value={inputs.name} handleChange={handleChange}/>

          <input
            type={"hidden"}
            name={"img"}
            value={inputs.img}
            handleChange={handleChange}/>


          <input
            type={"hidden"}
            name={"bggid"}
            value={inputs.bggid} handleChange={handleChange}/>

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
