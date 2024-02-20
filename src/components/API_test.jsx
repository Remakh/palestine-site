import React, { useEffect, useState } from 'react'
import axios from 'axios';

const getData = async () => {
    const response = await axios.get('http://localhost:8000/api/hello-world/')
    return response.data
}


const API_test = () => {

    const [message, setMessage] = useState('')

    useEffect(() => {
        let m = getData()
        console.log(m)
        setMessage(() => m.message)
    }, [])

  return (
    <div>
      <h1>{message}</h1>
    </div>
  )
}

export default API_test
