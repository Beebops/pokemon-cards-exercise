import { useState } from 'react'
import { v4 as uuidv4 } from 'uuid'
import axios from 'axios'

const useAxios = (url, restOfURL = '') => {
  const [data, setData] = useState([])

  const fetchData = async () => {
    try {
      const response = await axios.get(`${url}${restOfURL}`)
      setData((prevData) => [...prevData, { ...response.data, id: uuidv4() }])
    } catch (e) {
      console.log(`Error fetching data: ${e}`)
    }
  }

  return [data, fetchData]
}

export default useAxios
