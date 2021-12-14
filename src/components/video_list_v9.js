import React from 'react';

// // "VideoList" doesn't need any state, it doesn't recall any user interaction or doesn't re-render itself in any fashion. so it's just the plain "functional component" 
// // "VideoList" is a federal function
// const VideoList = () => {
//     return (
//         // here 'className' is similar to css style 'class'
//         <ul className='col-md-4 list-group'>

//         </ul>
//     );
// }

const VideoList = (props) => {
    // "props" object will arrive as an argument to the function.
    // "props" include the parent component's passing values (i.e. "videos") like the next line code
    // const videos = props.videos;
    return (
        <ul className='col-md-4 list-group'>
            {props.videos.length}
        </ul>
    );
    // here 'className' is similar to css style 'class'
}

export default VideoList