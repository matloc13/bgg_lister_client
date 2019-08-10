import React, { useState, useEffect } from 'react'
import Input from './input';

const ListForm = (props) => {

  const { handleSubmit, uid, list, } = props

  const [input, setInput] = useState({title: ''})

  useEffect(() => {
    if (list) {
      setInput({
        title: list.title || ''
      })
    }
  },[list])

  const listSubmit = (event) => {
    event.preventDefault()
    const fi = {
      title: input.title
    }
    if (list) {
      fi.id = list.id
    }
    handleSubmit(event, fi, uid, fi.id)
    setInput({
      title: ''
    })
  }

  const handleChange = (event) => {
  event.persist()
  setInput({ ...input, [event.target.name]: event.target.value })
}

  return (
    <>
      <form onSubmit={listSubmit}>
        <fieldset>

          <Input
            handleChange={handleChange}
            name={"title"}
            type={"text"}
            value={input.title}
          />

          <Input
            type={"submit"}
            value={list ? "update" : "create"}
          />

        </fieldset>
      </form>
    </>
  )

}

export default ListForm
