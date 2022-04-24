import "./index.css"

const SearchByHottness = ({handleSpiceHeatnessCheck}) => {
  return (
    <form data-testid="hotness-form">
      <label>Choose your level of heatness: </label>
      <label>
        Heat 1:
        <input 
          type="checkbox"
          value="1"
          onChange={handleSpiceHeatnessCheck}
        ></input>
      </label>
      <label>
        Heat 2:
        <input 
          type="checkbox"
          value="2"
          onChange={handleSpiceHeatnessCheck}
        ></input>
      </label>
      <label>
        Heat 3:
        <input 
          type="checkbox"
          value="3"
          onChange={handleSpiceHeatnessCheck}
        ></input>
      </label>


    </form>
  )
}

export default SearchByHottness