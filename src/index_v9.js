import React from 'react';
import { Component } from 'react';
import ReactDom from 'react-dom';
import YTSearch from 'youtube-api-search'
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';

const API_KEY = 'AIzaSyCROeILdEUq5DsiRjrjo-MT_D-qT1-AlL0';
class App extends Component {
    constructor(props) {
        super(props);

        this.state = { videos: [] };

        const _this = this;

        YTSearch( {key: API_KEY, term: 'surfboards'}, function(videos) {
            _this.setState({ videos });
        });
    }

    render() {
        // return (
        //     <div>
        //         <SearchBar />
        //         <VideoList />
        //     </div>    
        // );

        // pass some data from parent component ("App") into the child component ("VideoList")
        return (
            <div>
                <SearchBar />
                <VideoList videos={this.state.videos} />
            </div>
        );
        // passing data like this, it's referred to as passing "props" in React
        // the data ("videos") that passing from "App" to "VideoList" is referred to as a "prop"
        // anytime "App" renders, like when set state on the component, "VideoList" will get a new list of "videos" as well
    }
}

ReactDom.render(<App />, document.querySelector('.container'));