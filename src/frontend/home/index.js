import './index.css';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import SearchSpices from '../components/search';

import InfiniteScroll from 'react-infinite-scroll-component';
import AddNewBlend from '../new-blend';

function Home() {
  const [spices, setSpices] = useState([]);
  const [blends, setBlends] = useState([]);
  const [spiceSearchInput, setSpiceSearchInput] = useState("")

  const handleSpiceSearchChange = (e) => {
    setSpiceSearchInput(e.target.value)
  }
  //create new blend and return data to blend array state
  const handleBlendAddition = (newBlend) => {
    const newBlendStringify = JSON.stringify(newBlend)
    axios.post('api/v1/blends/',newBlendStringify)
      .then(res => {
        setBlends(prevBlends => [...prevBlends, res.data])})
      .catch(err => console.log(err))
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
    <div className="App" data-testid="app">
      <h4 className='categoryHeader'>Spice List</h4>
      <SearchSpices 
        handleSpiceSearchChange={handleSpiceSearchChange}
        spiceSearchInput={spiceSearchInput}
      />
      <InfiniteScroll 
        dataLength={spices.length}
        hasMore={true}
        height="525px"
        endMessage={
          <p style={{ textAlign: 'center' }}>
            <b>Yay! You have seen it all</b>
          </p>
        }
      >
        <div className="spicescontainer">
          { spices
            .filter(spice => (`${spice.name}`).toLowerCase().includes(spiceSearchInput.toLowerCase()))
            .map((spice) => (
              <div key={spice.id} className="spicebox">
                <p className="spices">
                <Link to={`/spices/${spice.id}`} >{spice.name}</Link>
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
              <Link to={`/blends/${blend.id}`} >{blend.name}</Link>
            </p>
          </div>
        ))}
      </div>
      <AddNewBlend handleBlendAddition={handleBlendAddition} spices={spices} blends={blends}/>
    </div>
  );
}

export default Home;
