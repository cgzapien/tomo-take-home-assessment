import axios from "axios"
import { useState, useEffect } from "react"

const BlendSpiceList = ({spiceid}) => {
  const [spice, setSpice] = useState({})
  console.log('spice: ', spice);
  const [spiceError, setSpiceError] = useState("")

  useEffect(() => {
    async function fetchData() {
      await axios.get(`/api/v1/spices/${spiceid}`)
      .then(res => setSpice(res.data))
      .catch(({response}) => setSpiceError(response.data.errors.join("")))
      
    };
    fetchData()
  },[])
  return (
    <div>
      <div>Spice Name: {spice.name || spiceError}</div>
    </div>
  )
}

export default BlendSpiceList