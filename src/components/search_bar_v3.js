import React, {Component} from 'react';

class SearchBar extends Component{
    render() {
        return <input onChange={this.onInputChange} />;
    }
    // "onChange" : event name (defined in the React document)

    // Whenever add a "event handler", it's always called with any event object (currently it's "event" below)
    // event object (the name can be changed anything else) describes the context or information about the event that occurred.
    // event object has got a lot of very specific, technical properties inside of it. i.e: input value
    onInputChange(event){
        console.log(event.target.value);
    }
};

export default SearchBar;

