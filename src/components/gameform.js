import React, { useState, useEffect, useContext, } from 'react'
import UserContext from '../context/usercontext'
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

const handleChange = (event) => {
  setInputs({...inputs, [event.target.name]: event.target.value})
}

const gameSubmit = (event) => {
  event.preventDefault()
  setLid(inputs.lists)
  const fi = {
    name: inputs.name,
    img: inputs.img,
    bggid: inputs.bggid
  }


  // if (game) {
  //   fi.id = game.id
  // }
  handleSubmit(event, fi, user.user.id, inputs.lists,)
  // setInputs({
  //   name: '',
  //   img: '',
  //   bggid: ''
  // })
}

// const optionsVar = {
//   list.map((ele) => {
//     return (
//       <option value={ele.id} key={ele.id}>{ele.title}</option>
//     )
//   })
// }
//




  return (
    <>
      <form onSubmit={gameSubmit} id={"gameForm"}>
        <fieldset>
          <label htmlFor="lists">List</label>
          {/* <select name="lists" autoFocus form={"gameForm"} value={option}
            onChange={()=> setOption()} options={optionsVar}>

          </select> */}

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
