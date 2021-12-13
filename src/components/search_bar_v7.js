import React, {Component} from 'react';

class SearchBar extends Component{

    constructor(props) {
        super(props);

        this.state = { term: '' };
    }

    render() {
        // return (
        //     <div>
        //         <input onChange={ event => this.setState({ term: event.target.value }) } />
        //     </div>
        // );
        // update text input to get its value from the state
        return (
            <div>
                <input
                    value = {this.state.term} 
                    onChange={ event => this.setState({ term: event.target.value }) } 
                />
            </div>
        );
        // value = {this.state.term} 
        // : causes the component to re-render and when it re-renders, the value of input is set to the new value of {this.state.term}
        // onChange={ event => this.setState({ term: event.target.value }) }
        // when onChange handler runs, at that point, the value of the input has not changed yet. it let component to re-render and "value" is updated to receive the new value.
        // !!! when user types sth, they didn't actually change the input value, they only triggered an event
    
    }
};

export default SearchBar;