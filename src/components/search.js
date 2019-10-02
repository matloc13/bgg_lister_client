import React, { useState,} from 'react'
import Game from './game';
import Input from './input'
import useSearchBgg from '../hooks/useSearchBgg'

const Search = (props) => {

const { list, slist, setSlist, } = props

const [search, setSearch] = useState('')
const [query, setQuery] = useState('')
const [data] = useSearchBgg(query)

const setSearchQuery = (event) => {
  event.preventDefault()
  let squery = search
  squery = squery.replace(/\s/g, '+')
  console.log(squery)

  setQuery(squery)
  setSearch('')
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
        data.items &&
          data.items.item.map((ele, i) => {

            return (
              <Game
                name={ele.name.value}
                lookup={ele.id}
                i={i}
              />
            )})
          }
      </article>
    </div>
  )}

export default Search;
