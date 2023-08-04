const SearchBar=({ setSearchValue, handleSearch })=>{
    return (
        <>
          <input
            placeholder="search events"
            className="flex-1 outline-none"
            onChange={(e) => {
                setSearchValue(e.target.value);
                handleSearch(); // Call handleSearch when input value changes
            }}
              
          />
        </>
    );
}
export default SearchBar;