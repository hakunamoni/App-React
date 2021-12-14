import React from 'react';
import { Component } from 'react';
import ReactDom from 'react-dom';
import YTSearch from 'youtube-api-search'

import SearchBar from './components/search_bar';

const API_KEY = 'AIzaSyCROeILdEUq5DsiRjrjo-MT_D-qT1-AlL0';

// YTSearch( {key: API_KEY, term: 'surfboards'}, function(data) {
//     console.log(data);
// });

class App extends Component {
    constructor(props) {
        super(props);

        this.state = { video: [] };

        YTSearch( {key: API_KEY, term: 'surfboards'}, function(videos) {
            this.setState({ videos });
            // JSX will make recognize as below automatically
            // this.setState({ videos : videos });
        });
    }

    render() {
        return (
            <div>
                <SearchBar />
            </div>    
        );    
    }
}

ReactDom.render(<App />, document.querySelector('.container'));