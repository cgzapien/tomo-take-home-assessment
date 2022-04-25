import { useState, } from "react";
import { useLocation } from "react-router-dom";
import "./index.css"

const AddNewBlend = ({handleBlendAddition, spices, blends}) => {

  
  const [newBlend, setNewBlend] = useState({
    id: "",
    name: '',
    blends: [],
    spices: [],
    description: '',
  });
  console.log('newBlend: ', newBlend);
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
    <div>
      <h1>Make your own blend</h1>
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
    <div>
      <p>New Blend Name: {newBlend.name}</p>
      <p>New Blend Description: {newBlend.description}</p>
      <p>New Blend Spices: {newBlend.spices.map(spice => console.log(spice))}</p>
    </div>
    </div>
  )
};
export default AddNewBlend;