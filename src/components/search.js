import React, { useState,} from 'react'
import { BASE_URL} from '../constants'
import Input from './input'

const Search = () => {

  const search = (query) => {
    fetch(`${BASE_URL}/`)
  }
  const [search, setSearch] = useState()

  const handleChange = (event)=> {
    setSearch({ event.target.value})
  }

  return (
    <>
      <form>
        <Input
          name={"query"}
          type={"text"}
          value={search}
          handleChange={handleChange}
      />
      <Input
        type={"submit"}
        value={"search"}
      />
    </form>
    </>
  )
}

export default Search;
