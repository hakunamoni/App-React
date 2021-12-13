import React from 'react';
import ReactDom from 'react-dom';

// import SearchBar from 'search_bar';
import SearchBar from './components/search_bar';

const API_KEY = 'AIzaSyCROeILdEUq5DsiRjrjo-MT_D-qT1-AlL0';

// Create a new component. This component should produce some HTML
// const App = function() { // this function is built based on ES6
//     // returing info is JSX. i.e: <div>Hi! This is landing index.js of first component</div>
//     return <div>Hi! This is landing index.js of first component</div>;
// }
// // This is a class and not an instance. It can create many instances based on this.
// // And then those instances can be passed to ReactDOM to be rendered.  
const App = () => {
    // return <div>Hi! This is landing index.js of first component</div>;
    return (
        <div>
            <SearchBar />
        </div>    
    );
}

// Take this component's generated HTML and put it on the page (in the DOM), here let React to receive component and make it show on the web page
ReactDom.render(<App />, document.querySelector('.container'));
// 1st argument :<App />: this is just the instance of "App" class
// 2nd argument : : a reference to an existing Dom node on the page, in a word, target container / target DOM