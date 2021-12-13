import React, {Component} from 'react';

class SearchBar extends Component{
    render() {
        // arrow function
        // return <input onChange={ (event) => { console.log(event.target.value) } } />;
        // whenenver there's a single line arrow function, don't use additional curly brace ("{}") like the following
        // return <input onChange={ (event÷) => console.log(event.target.value) } />;
        // if there's sinlge argument, drop off parentheses ("()")
        return <input onChange={ event => console.log(event.target.value) } />;
    }
};

export default SearchBar;

