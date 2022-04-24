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
      
      // const color = getComputedStyle(document.documentElement).getPropertyValue('--spice-color');
      // console.log("color",color); style={{backgroundColor: `#${spice.color}`}}
    };
    fetchData();
  }, []);
  const heat = (spice.heat === 0) ? <p>No Heat at all!</p> 
  : (spice.heat === 1) ? <p>&#128293;</p> 
  : (spice.heat === 2) ? <p>&#128293; &#128293;</p> 
  : (spice.heat === 3) ? <p>&#128293; &#128293; &#128293;</p> 
  : (spice.heat === 4) ? <p>&#128293; &#128293; &#128293; &#128293; &#9760;&#65039;</p> 
  : (spice.heat === 5) ? <p>&#128293; &#128293; &#128293; &#128293; &#128293; &#9760;&#65039;</p> 
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
      <button className='spice-gohome'  onClick={handleHomeClick}>Go home</button>
    </div>
  )
}

export default SpiceDetail