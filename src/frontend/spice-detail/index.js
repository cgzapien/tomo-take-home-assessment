import axios from 'axios'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useHistory } from 'react-router-dom'
import "./index.css"

const SpiceDetail = () => {

  const { id } = useParams()
  const [spice, setSpice] = useState(null)
  const [spiceError, setSpiceError] = useState("")
  const history = useHistory()
  const handleHomeClick = () => {
    history.push("/")
  }

  useEffect(() => {
    async function fetchData() {
      await axios.get(`/api/v1/spices/${id}`)
      .then(res => setSpice(res.data))
      .catch(({response}) => setSpiceError(response.data.errors.join("")))
      
      // const color = getComputedStyle(document.documentElement).getPropertyValue('--spice-color');
      // console.log("color",color);
    }
    fetchData();
  }, []);
  return (
    <div className='spiceDetails'>
      <button onClick={handleHomeClick}>Go home</button>
      <h2>Spice Detail Page</h2>
      {spiceError}
      {
        spice && <div >
          <div>Spice Name: {spice.name}</div>
          <div>Spice Color: {spice.color}</div>
          <div>Spice Cost: {spice.price}</div>
          <div>Spice Heat Level: {spice.heat  } &#128293;</div>
        </div>  
      }
    </div>
  )
}

export default SpiceDetail