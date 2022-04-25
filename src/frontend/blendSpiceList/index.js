import axios from "axios"
import { useState, useEffect } from "react"

const BlendSpiceList = ({spiceid}) => {
  const [spice, setSpice] = useState({})
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
      <div>Spice Name: {spice.name || (spiceError ? "this blend contains a secret spice" : "")}</div>
    </div>
  )
}

export default BlendSpiceList