import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Music_Page from './Musician_page';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<Music_Page />,document.getElementById('Music'));
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
// ReactDom.render(<App />, document.getElementById('root'));
//Render all compnents in app

serviceWorker.unregister();
