import React from 'react';
import './style/App.css';

import Body from './components/Body'
import EventHandlerComponent from './containers/EventHandlerContainer'

class App extends React.PureComponent {
  render () {
    return (
      <div className="App">
        <Body />
        <EventHandlerComponent />
      </div>
    );
  }
}

export default App;
