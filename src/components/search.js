const SearchBar = () => (
    <form action="/" method="get">
        <input
            type="text"
            id="header-search"
            placeholder="Vacuums, PCs, etc."
            name="s" 
        />
        <button variant="contained" color="primary" type="submit">Search</button>
    </form>
);
export default SearchBar; 