import React, { Component } from 'react';
import './App.css';
import FlipPage from 'react-flip-page';

class App extends Component {
  render() {
    return (
      <div className="App">
        <FlipPage>
            <img src="http://lorempixel.com/320/480" />
            <img src="http://unsplash.it/320/480" />
            <img src="http://lorempixel.com/320/480" />
            <img src="http://unsplash.it/320/480" />
        </FlipPage>
      </div>
    );
  }
}

export default App;
