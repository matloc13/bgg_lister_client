import { useState, useEffect,} from 'react'
import { BASE_URL} from '../constants.js';

const useSearchBgg = (query) => {

const [data, setData] = useState({})


useEffect(() => {
    getSearch(query)
},[query])

const getSearch = ( query) => {
  console.log(query)
  fetch(`${BASE_URL}/searchlists/${query}`)
  .then(res => res.json())
  .then(json => setData(json))
  // .then(json => console.log(json))

  .catch(err => console.error(err))
}

return [data]
}

export default useSearchBgg;
