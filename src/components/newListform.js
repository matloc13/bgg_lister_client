import React, { useState,  useContext,} from 'react'
import UserContext from '../context/usercontext'
import Input from './input'

const NewList= (props) => {

  const user = useContext(UserContext)

  const { handleSubmit, uid, game, } = props

  const [input, setInput] = useState({
    title: '',
    name: game.name.value,
    img: game.thumbnail.value,
    bggid: game.id

  })

const newlistAndGame = (event) => {
  event.preventDefault()
  const game = {
    name: input.name,
    img: input.img,
    bggid: input.bggid
  }
  handleSubmit(event, game, user.user.id, input.title)
}

  const handlechange = (event) => {
  event.persist()
  setInput({ ...input, [event.target.name]: event.target.value })
}

return (
  <form onSubmit={newlistAndGame} id={'newListForm'}>
    <fieldset>

      <Input
        handleChange={handlechange}
        type={"text"}
        name={"title"}
        value={input.title}
      />

      <input
        type={"hidden"}
        name={"name"}
        value={input.name}
        handleChange={handlechange}/>

      <input
        type={"hidden"}
        name={"img"}
        value={input.img}
        handleChange={handlechange}/>

      <input
        type={"hidden"}
        name={"bggid"}
        value={input.bggid}
        handleChange={handlechange}/>

      <Input
        type={"submit"}
        value={"add game"}
      />
    </fieldset>
  </form>
)

}

export default NewList
