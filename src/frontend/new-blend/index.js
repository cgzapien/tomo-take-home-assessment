import axios from "axios";
import { useState, } from "react";
import "./index.css"

const AddNewBlend = ({handleBlendAddition, spices, blends}) => {

  
  const [newBlend, setNewBlend] = useState({
    id: "",
    name: '',
    blends: [],
    spices: [],
    description: '',
  });
  
  const filterSpices = spices.filter(spice => (newBlend.spices).includes(spice.id))
  console.log('filterSpices: ', filterSpices);
  const filterBlends = blends.filter(blend => (newBlend.blends).includes(blend.id))
  const handleBlendSubmit = (e) => {
    e.preventDefault();
    handleBlendAddition(newBlend)

  };
  const handleNewBlendChange = (e) => {
    const {name, value} = e.target
    setNewBlend(prevBlend => ({...prevBlend, [name]: value}))
  }
  const handleSpiceOptions = (e) => {    
    setNewBlend(prevBlend => ({
      ...prevBlend,
      spices: [...prevBlend.spices, e.target.value]
    }));
  };
  const handleBlendsOptions = (e) => {
    setNewBlend(prevBlend => ({
      ...prevBlend,
      blends: [...prevBlend.blends, e.target.value]
    }));
  };
  return (
    <div className="blendsubmittal">
      <h1>Create your own blend</h1>
    <form onSubmit={handleBlendSubmit} className="new-blend-form">
      <label htmlFor="name">Give your blend a name: </label>
      <input
        type="text"
        name="name"
        placeholder="name"
        value={newBlend.name}
        onChange={handleNewBlendChange}
        required
      ></input>
      <br/>
      <label>select your spices</label>
      <select name="spices" onChange={handleSpiceOptions} value={newBlend.spices || ""} multiple={false} >
        {spices && spices.map(spice => (
          <option name="spices" key={spice.id} value={spice.id}>
            {spice.name}
          </option>
        ))}
      </select>
      <br/>
      <label htmlFor="blends">select from previous blends</label>
      <select name="blends" onChange={handleBlendsOptions} value={newBlend.blends || ""} multiple={false} >
        {blends && blends.map(blend => (
          <option name="blends" key={blend.id} value={blend.id}>
            {blend.name}
          </option>
        ))}
      </select>
      <br/>
      <label htmlFor="description">Give your blend a description: </label>
      <input
        type="text"
        name="description"
        placeholder="description"
        value={newBlend.description}
        onChange={handleNewBlendChange}
      ></input>
      <button type="submit">submit</button>
    </form>
    <div style={{padding: "20px"}}>
      <p><b>New Blend Name:</b> {newBlend.name}</p>
      <p><b>New Blend Description:</b> {newBlend.description}</p>
      <div><b>Previous blend additions:</b> {filterBlends.map(blend => {
        return <p key={blend.id}>{  blend.name }</p>
      } 
        )}</div>
      <div><b>New Blend Spices:</b> {filterSpices.map(spice =>{
        return <p key={spice.id}>{  spice.name }</p>
        })}</div>
    </div>
    </div>
  )
};
export default AddNewBlend;