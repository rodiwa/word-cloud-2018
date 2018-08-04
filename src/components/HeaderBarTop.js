import React from 'react'
import { isLoggedIn, signIn, signOut } from '../services/AuthService'

import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
// import Button from '@material-ui/core/Button'
import AccountCircle from '@material-ui/icons/AccountCircle'
import IconButton from '@material-ui/core/IconButton'
import Menu from '@material-ui/core/Menu'
import MenuItem from '@material-ui/core/MenuItem'

export default class HeaderBarTop extends React.PureComponent {
  constructor (props) {
    super(props)

    this.state = {
      activeEl: null
    }

    this.handleMenuOpen = this.handleMenuOpen.bind(this)
    this.handleMenuClose = this.handleMenuClose.bind(this)
  }

  handleSignIn () {
    this.handleMenuClose()
    signIn()
  }

  handleSignOut () {
    this.handleMenuClose()
    signOut()
  }

  handleMenuOpen (e) {
    this.setState({ activeEl: e.currentTarget })
  }

  handleMenuClose () {
    this.setState({ activeEl: null })
  }

  render () {
    return (
      <AppBar position='static' color='primary' className='header-bar-top'>
        <Toolbar>
          <div>
            <IconButton
              aria-owns={!!this.state.activeEl ? 'menu-appbar' : null}
              aria-haspopup="true"
              onClick={this.handleMenuOpen}
            >
              <AccountCircle size={3} style={{ color: 'white' }} />
            </IconButton>
            <Menu
              id='menu-appbar'
              onClose={this.handleMenuClose}
              anchorEl={this.state.anchorEl}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              onClose={this.handleMenuClose}
              open={!!this.state.activeEl}>
              { !isLoggedIn() && <MenuItem onClick={() => this.handleSignIn()}>Login</MenuItem> }
              { !!isLoggedIn() && <MenuItem onClick={() => this.handleSignOut()}>Logout</MenuItem> }
            </Menu>
          </div>
        </Toolbar>
      </AppBar>
    )
  }
}
