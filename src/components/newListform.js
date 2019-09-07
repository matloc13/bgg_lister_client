import React, { useState, useEffect,} from 'react'
import Input from './input'

const NewList= (props) => {

  const { handleSubmit, uid, game, } = props

  const [input, setInput] = useState({
    title: '',
    name: game.name.value,
    img: game.thumbnail.value,
    bggid: game.id

  })

const newlistAndGame = () => {

}

  const handleChange = (event) => {
  event.persist()
  setInput({ ...input, [event.target.name]: event.target.value })
}

return (
  <form onSubmit={newlistAndGame} id={'newListForm'}>
    <fieldset>

      <Input
        handleChange={handleChange}
        type={"text"}
        name={"title"}
        value={input.title}
      />

      <input
        type={"hidden"}
        name={"name"}
        value={input.name}
        handleChange={handleChange}/>

      <input
        type={"hidden"}
        name={"img"}
        value={input.img}
        handleChange={handleChange}/>

      <input
        type={"hidden"}
        name={"bggid"}
        value={input.bggid}
        handleChange={handleChange}/>

      <Input
        type={"submit"}
        value={"add game"}
      />
    </fieldset>
  </form>
)

}

export default NewList
