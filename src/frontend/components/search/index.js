import "../search/index.css"

const SearchSpices = (props) => {

  const { handleSpiceSearchChange,spiceSearchInput } = props

  return (
    <form  className="search" data-testid="spice-searchform">
      <input
      className="searchInput"
      type="text"
      placeholder="Hello World! Search for your spice"
      value={spiceSearchInput}
      onChange={handleSpiceSearchChange}
      data-testid="search-input"
      ></input>
    </form>
  )
}

export default SearchSpices