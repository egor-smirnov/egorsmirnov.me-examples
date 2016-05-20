import HelloWorld from './hello-world';
//import HelloWorld from './hello-world-es5';
import React from 'react';
import ReactDOM from 'react-dom';

ReactDOM.render(
    <HelloWorld phrase="ES6"/>,
    document.querySelector('.root')
);