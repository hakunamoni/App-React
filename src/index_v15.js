import React from 'react';
import { Component } from 'react';
import ReactDom from 'react-dom';
import YTSearch from 'youtube-api-search'
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';
const API_KEY = 'AIzaSyCROeILdEUq5DsiRjrjo-MT_D-qT1-AlL0';
class App extends Component {
    constructor(props) {
        super(props);

        this.state = { 
            videos: [],
            selectedVideo: null
        };

        this.videoSearch('surfboards');
    }

    videoSearch(term){
        const _this = this;

        YTSearch( {key: API_KEY, term: term}, function(videos) {
            _this.setState({ 
                videos: videos,
                selectedVideo: videos[0]
            });
        });
    }

    render() {
        return (
            <div>
                <SearchBar onSearchTermChange={term => this.videoSearch(term)} />
                <VideoDetail video={this.state.selectedVideo} />
                <VideoList
                    onVideoSelect={selectedVideo => this.setState({selectedVideo})}
                    videos={this.state.videos} 
                />
            </div>
        );
    }
}

ReactDom.render(<App />, document.querySelector('.container'));

/*
1 - refactored the Youtube search into its own method "videoSearch" and this method takes a single string "search term" (column 21)
2 - took this method "videoSearch" and passed it down into the "SearchBar" under the property "onSearchTermChange" (column 35)
    all "SearchBar" has to do is call "onSearchTermChange" with the new search term ("term") and 
    that will call the searching function ("videoSearch") which will go ahead and fetch a new list of videos
3 - inside of "SearchBar" (search_bar.js), refactored the "onChange" event (column 15 in search_bar.js)
    whenever the content of the input is changed, it now calls "onInputChange" with the new input value
4 - "onInputChange" has 2 functions / 2 purposes (column 21 in search_bar.js)
    - first, it sets the state of this component ("SearchBar") (column 22 in search_bar.js)
    - secondly, it fires off the callback function "onSearchTermChange" (column 23 in search_bar.js)
*/