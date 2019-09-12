import React, { useState,} from 'react'
import { BASE_URL} from '../constants'
import Game from './game';
import Input from './input'

const Search = (props) => {

const { handleSubmit, list, slist, setSlist, searchList,} = props

const [search, setSearch] = useState('')

const setSearchQuery = (event) => {
  event.preventDefault()
  let query = search
  query = query.replace(/\s/g, '+')
  console.log(query)
  handleSubmit(event, query)
}


  const handleChange = (event)=> {
    setSearch( event.target.value)
  }

  return (
    <div className={"searchContainer"}>
      <form onSubmit={setSearchQuery}>
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

      <article>
        {
          searchList.items &&

          searchList.items.item.map((ele) => {
            return (
              <Game
                name={ele.name.value}
                lookup={ele.id}
              />
            )})
        }
      </article>
    </div>
  )}

export default Search;
