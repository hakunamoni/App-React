import React, {Component} from 'react';

class SearchBar extends Component{

    constructor(props) {
        super(props);

        this.state = { term: '' };
    }

    // render() {
    //     return <input onChange={ event => this.setState({ term: event.target.value }) } />;
    // }

    // updated render() with several several elements
    // to retrieve the state property, use {this.state.term} !!! only when referencing, not able to use this to update/set value to it.
    render() {
        return (
            <div>
                <input onChange={ event => this.setState({ term: event.target.value }) } />
                Value of the input: {this.state.term}
            </div>
        );
    }
    // full circle of "state"
    // whenever update the input element ("onChange" is called), event handler runs ("event => this.setState({ term: event.target.value })")
    // in event handler, set the state property with the new value of input ("this.setState({ term: event.target.value })")
    // whenever the state is updated ("this.setState" is called), component automatically re-render ("render()" function is called again)
    // and push all the updated information from the render method into the DOM ("{this.state.term}")
};

export default SearchBar;