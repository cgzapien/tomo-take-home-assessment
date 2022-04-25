import axios from "axios"
import { useState, useEffect } from "react"

const BlendListOfBlends = ({blend}) => {
  
  const [blends, setBlends] = useState({})
  console.log('blends: ', blends);

  useEffect(() => {
    async function fetchData() {
      await axios.get(`/api/v1/blends/${blend}`)
      .then(res => setBlends(res.data))
      .catch(err => console.log(err))
      
    };
    fetchData()
  },[])
  return (
    <div>
      <div>{blends.name}</div>
    </div>
  )
}

export default BlendListOfBlends