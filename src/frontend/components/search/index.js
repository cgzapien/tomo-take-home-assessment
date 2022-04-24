import "../search/index.css"

const SearchSpices = (props) => {

  const { handleSpiceSearch, handleSpiceSearchChange,spiceSearchInput } = props

  return (
    <form onSubmit={handleSpiceSearch} className="search" data-testid="spice-searchform">
      <input
      className="searchInput"
      type="text"
      placeholder="Hello World! Search for your spice"
      value={spiceSearchInput}
      onChange={handleSpiceSearchChange}
      data-testid="search-input"
      ></input>
      {/* <button className="searchBtn">Search</button> */}
    </form>
  )
}

export default SearchSpices