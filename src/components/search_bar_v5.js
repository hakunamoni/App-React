import React, {Component} from 'react';

class SearchBar extends Component{

    constructor(props) {
        super(props);
        // super is just the parent class's function ("Component")

        this.state = { term: '' };
        // whenever use state, intialize it by creating a new object and assign it to "this.state"
        // it's able to add any property inside the state and the above case, the property "term" will have the search bar input change value which is updated by user
    }

    render() {
        // return <input onChange={ event => console.log(event.target.value) } />;
        // to set the term property of state, use "this.setState" like the following. !!Bad!! this.state.term = event.target.value
        return <input onChange={ event => this.setState({ term: event.target.value }) } />;
    }
};

export default SearchBar;

