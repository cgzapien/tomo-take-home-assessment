import "../search/index.css"

const SearchSpices = (props) => {

  const { handleSpiceSearch, handleSpiceSearchChange,spiceSearchInput } = props

  return (
    <form onSubmit={handleSpiceSearch} className="search" data-testid="spice-search">
      <input
      className="searchInput"
      placeholder="Hello World! Search for your spice"
      value={spiceSearchInput}
      onChange={handleSpiceSearchChange}
      ></input>
      {/* <button className="searchBtn">Search</button> */}
    </form>
  )
}

export default SearchSpices