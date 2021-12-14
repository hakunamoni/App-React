import React from 'react';
import VideoListItem from './video_list_item';

const VideoList = (props) => {
    // it should add key (identifier for each list item) in React
    // the following "video.etag" is unique value from youtube, it can be anything identical. i.e. 1,2,3,..
    const videoItems = props.videos.map((video) => {
        return <VideoListItem key={video.etag} video={video} />
    });

    return (
        <ul className='col-md-4 list-group'>
            {videoItems}
        </ul>
    );
}

export default VideoList