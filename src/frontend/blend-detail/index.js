import { useEffect, useState } from "react"
import axios from "axios";
import { useParams } from "react-router-dom";
import { Link } from 'react-router-dom';
import "./index.css"
import BlendSpiceList from "../blendSpiceList";
// get blend API is at /api/v1/blends/:id

const BlendDetail = () => {
  const { id } = useParams()
  
  const [blend, setBlend] = useState({})
  //console.log('blend: ', blend);
  const { name, description, spices } = blend
  //console.log('spices: ', spices);

  useEffect(() => {
    async function fetchData() {
      const { data } = await axios.get(`/api/v1/blends/${id}`);
    setBlend(data)
    }
    fetchData();
  }, []);
  
  return (
    <div className="blendDetails">
      <h2>Blend Detail Page</h2>
      {blend && <div>
          <div>Blend Name: {name}</div> 
          <div>Blend Description: {description}</div>
          {spices? 
            <div>
              <h4>Spices used to make this blend:</h4>
              {spices.map(spiceid => 
              <BlendSpiceList key={spiceid} spiceid={spiceid} />  
              )}
            </div>
            :
            ""
          }
        </div>
      }
    </div>
  );
};

export default BlendDetail;