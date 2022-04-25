import axios from 'axios'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useHistory } from 'react-router-dom'
import "./index.css"

const SpiceDetail = () => {

  const { id } = useParams();
  const [spice, setSpice] = useState([]);
  const [spiceError, setSpiceError] = useState("");
  const history = useHistory();
  const handleHomeClick = () => {
    history.push("/")
  };

  useEffect(() => {
    async function fetchData() {
      await axios.get(`/api/v1/spices/${id}`)
      .then(res => setSpice(res.data))
      .catch(({response}) => setSpiceError(response.data.errors.join("")))
    };
    fetchData();
  }, []);
  const heat = (spice.heat === 0) ? <span>No Heat at all!</span> 
  : (spice.heat === 1) ? <span>&#128293;</span> 
  : (spice.heat === 2) ? <span>&#128293; &#128293;</span> 
  : (spice.heat === 3) ? <span>&#128293; &#128293; &#128293;</span> 
  : (spice.heat === 4) ? <span>&#128293; &#128293; &#128293; &#128293; &#9760;&#65039;</span> 
  : (spice.heat === 5) ? <span>&#128293; &#128293; &#128293; &#128293; &#128293; &#9760;&#65039;</span> 
  : "";
  const errormessage = (spiceError) ? <p>{spiceError} &#128274;</p> : "";
  return (
    <div className='spiceDetails'>
      <h2>Spice Detail Page</h2>
      <div className='errormessage'>
        {errormessage}
      </div>
      {
        spice && <div >
          <div>Spice Name: {spice.name}</div>
          <div>Spice Color: {spice.color}</div>
          <div>Spice Cost: {spice.price} <div style={{backgroundColor: `#${spice.color}`}}></div></div>
          <div>Spice Heat Level: {heat }</div>
        </div>  
      }
      <button className='spice-gohome' style={{backgroundColor: `#${spice.color}`}}  onClick={handleHomeClick}>Go home</button>
    </div>
  )
}

export default SpiceDetail