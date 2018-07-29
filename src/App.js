import React from 'react';
import './style/App.css';

import Body from './components/Body'
import { isLoggedIn, signIn, signOut } from './services/AuthService'
import { Button } from '../node_modules/@material-ui/core';

class App extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      isLoggedIn: false
    }
  }

  componentWillMount () {
    this.setState({ isLoggedIn: !!isLoggedIn() })
  }

  render () {
    return (
      <div className="App">
        { !isLoggedIn() && <Button
          color='primary'
          className='header-btn'
          onClick={signIn}>
          LOGIN
          </Button>
        }
        { isLoggedIn() && <Button
          color='primary'
          className='header-btn'
          onClick={signOut}>
          LOGOUT
          </Button>
        }
        <Body />
      </div>
    );
  }
}

export default App;
