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

        const _this = this;

        YTSearch( {key: API_KEY, term: 'surfboards'}, function(videos) {
            _this.setState({ 
                videos: videos,
                selectedVideo: videos[0]
            });
        });
    }

    render() {
        return (
            <div>
                <SearchBar />
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

/* "callback" is a function that pass from "App" to "VideoList" and finally into "VideoListItem"
i.e "onVideoSelect"
onVideoSelect={selectedVideo => this.setState({selectedVideo})}
This function just updates "App" state, it takes a video and it updates the selected video
Pass "onVideoSelect" as a property into "VideoList"
"VideoList" (in video_list.js), takes that property ("onVideoSelect") and pass it into "VideoListItem"
"VideoListItem" (in video_list_item.js), takes that property ("onVideoSelect") and 
says whenever video is clicked, call that function ("onVideoSelect") with the "video" that was passed
here "video" was given by map function in VideoList component.

Doing "callbacks" like this, pass "callback"s down from some parent components to some more child component
*/