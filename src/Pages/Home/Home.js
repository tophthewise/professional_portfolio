import React, { Component } from 'react';
import logo from '../../img/Sun.svg';
// import './Home.css';
import Navigation from '../../Components/Navigation/Navigation';
import './Home.css';
import Developer from '../../Components/Developer/Developer';
import Designer from '../../Components/Designer/Designer';
import Musician from '../../Components/Musician/Musician';
import Poop from '../../Pages/About/About'; 


import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';

class Home extends Component {
  render() {
     

    return (
      <div>
      

        <Designer title="Designer" history={this.props.history}/>
        <Developer title="Developer" history={this.props.history}/>
        <Musician title="Musician" history={this.props.history} onClick={this.enableMusicPage}/ >
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>




      </div>
    );
  }
}

export default Home;
