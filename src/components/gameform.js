import React, { useState, useEffect, } from 'react'
import { BASE_URL } from '../constants';
import Input  from './input';

const GameForm = (props) => {

const {handleSubmit, uid, game, slist, list, setList, } = props

const[inputs, setInputs] = useState({
  name: game.name.value,
  img: game.thumbnail.value,
  bggid: game.id,
  listname: ''
})

const [lid, setLid] = useState()

useEffect(() => {
  getLists()
  console.log(list)
},[])

const getLists = (uid) => {
  fetch(`${BASE_URL}/users/${uid}/listnames`)
  .then(res => res.json())
  .then(json => setList(json))
  .catch(err => console.error(err))
}

const handleChange = (event) => {
  setInputs({...inputs, [event.target.name]: event.target.value})
}

const gameSubmit = (event) => {
  event.preventDefault()
  const fi = {
    name: inputs.name,
    img: inputs.img,
    bggid: inputs.bggid
  }
  const lid = inputs.lists

  // if (game) {
  //   fi.id = game.id
  // }
  handleSubmit(event, fi, uid, inputs.listname,)
  // setInputs({
  //   name: '',
  //   img: '',
  //   bggid: ''
  // })
}







  return (
    <>
      <form onSubmit={gameSubmit} id={"gameForm"}>

        <label htmlFor="lists">Lists</label>

        <Input
          handleChange={handleChange}
          name={"name"}
          type={"hidden"}
          value={inputs.name}
        />

        <Input
          handleChange={handleChange}
          name={"img"}
          type={"hidden"}
          value={inputs.img}
        />

        <Input
          handleChange={handleChange}
          name={"bggid"}
          type={"hidden"}
          value={inputs.bggid}
        />

        <Input
          type={"submit"}
          value={"add game"}
        />
      </form>

      <select name="lists" autoFocus form={"gameForm"} onChange={handleChange}>
        {

          list.map((ele) => {
            return (
              <option value={ele.id} key={ele.id}>{ele.title}</option>
            )
          })
        }


    </select>
  </>
  )
}

export default GameForm
