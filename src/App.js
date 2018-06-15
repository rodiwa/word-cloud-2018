import React from 'react';
import './style/App.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'

import Body from './components/Body'

const Header = () => <header className="header"><h1>Word Cloud</h1></header>

class App extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      showHeader: false
    }
  }
  render() {
    return (
      <MuiThemeProvider>
        <div className="App">
          {this.state.showHeader && <Header />}
          <Body />
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
