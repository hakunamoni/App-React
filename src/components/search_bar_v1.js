import React from 'react';

// const foo = 5;

// export default foo;
// if export foo instead of exporting "SearchBar" as above, the imported "SearchBar" in index.js will have 5, not the above "SearchBar" const

const SearchBar = () => {
    return <input />;
}
// this component is called 'functional component', some info goes in (through (,,) parameters), some JSX comes out

export default SearchBar;