import './index.css';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import SearchSpices from '../components/search';
import SearchByHottness from '../components/searchbyhottness.js';
import InfiniteScroll from 'react-infinite-scroll-component';

function Home() {
  const [spices, setSpices] = useState([]);
  const [blends, setBlends] = useState([]);
  const [spiceSearchInput, setSpiceSearchInput] = useState("")

  
  const handleSpiceSearch = (e) => {
    e.preventDefault()
    console.log("submit working")
    if(spiceSearchInput.length < 1) {
      fetchSpiceData()
    } else if(spiceSearchInput.length > 0) {
      setSpices(prevSpices => prevSpices.filter(spice => spice.name.toLowerCase().includes(spiceSearchInput.toLowerCase())))
    }
  }
  const handleSpiceSearchChange = (e) => {
    setSpiceSearchInput(e.target.value)
  }
  const handleSpiceHeatnessCheck = (e) => {
    axios.get(`/api/v1/spices/heat?heat=${e.target.value}`)
    console.log(e.target.value)
  }
 
  // load spices when the page loads
  const fetchSpiceData = () => {
    axios.get('/api/v1/spices').then((response) => {
      setSpices(response.data);
    });
  }
  useEffect(() => {
    fetchSpiceData()
    axios.get('/api/v1/blends').then((response) => {
      setBlends(response.data);
    });
  }, []);
  return (
    <div className="App">
      <h4 className='categoryHeader'>Spice List</h4>
      <SearchSpices 
        handleSpiceSearch={handleSpiceSearch}
        handleSpiceSearchChange={handleSpiceSearchChange}
        spiceSearchInput={spiceSearchInput}
      />
      <SearchByHottness handleSpiceHeatnessCheck={handleSpiceHeatnessCheck}/>
      <InfiniteScroll 
        dataLength={spices.length}
        hasMore={true}
        height="525px"
      >
        <div className="spicecontainer">
          { spices
            .filter(spice => (`${spice.name}`).toLowerCase().includes(spiceSearchInput.toLowerCase()))
            .map((spice) => (
              <div key={spice.id} >
                <p className="spices">
                <Link to={`/spices/${spice.id}`}>{spice.name}</Link>
                </p>
              </div>
          ))}
        </div>

      </InfiniteScroll>
      <h4 className='categoryHeader'>Blend List</h4>
      <div className="blendcontainer">
        {blends.map((blend) => (
          <div key={blend.id} >
            <p className="blends">
              <Link to={`/blends/${blend.id}`}>{blend.name}</Link>
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;
