import React, {Component} from 'react';
class SearchBar extends Component{

    constructor(props) {
        super(props);

        this.state = { term: '' };
    }

    render() {
        return (
            <div className="search-bar">
                <input
                    value = {this.state.term} 
                    onChange={ event => this.setState({ term: event.target.value }) } 
                />
            </div>
        );
    }
};

export default SearchBar;

/*
in general, give the top level component a "className" that is same as the component name.
lowercase separated by dashes ("SearchBar" -> "search-bar")
*/