import React from 'react';
import ReactDom from 'react-dom';

import SearchBar from './components/search_bar';

const API_KEY = 'AIzaSyCROeILdEUq5DsiRjrjo-MT_D-qT1-AlL0';

// Create a new component. This component should produce some HTML
const App = () => {
    return (
        <div>
            <SearchBar />
        </div>    
    );
}

// Take this component's generated HTML and put it on the page (in the DOM)
ReactDom.render(<App />, document.querySelector('.container'));

/*
app of structure (milestone 1)
1 - app starts inside of "index.js" where define a 'base component' called "App" // column 9
2 - "index.js" imports the component "SearchBar" into it // column 4
3 - and then renders it ("SearchBar") inside the "App" component // column 12
4 - "App" component is just the "functional component" because it doesn't have any concept of state
    // class based components are used to whenever the component needs to be aware of state in some fashion. 
        so the data's changing over time reacting to user events and need to keep track of some aspect of state
    // functional components are used to take in some information and spitting out some JSX
        functional components can contain a class based component
5 - "SearchBar" (search_bar.js) component makes use of state by updating the user input whenever the state changes // column 15
    whenever the user enters some text, first update the state which causes the entire component to re-render.
6 - made the element (i.e. input) as "controlled component" by telling it to receive its value from state // column 14
*/