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
<SearchBar onSearchTermChange={term => this.videoSearch(term)} />
when "search bar" calls "onSearchTermChange", "term" will be sent to this.videoSearch(term)
videoSearch will do the Youtube search
*/