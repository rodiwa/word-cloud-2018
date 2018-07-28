import React from 'react'

import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Button from '@material-ui/core/Button'
import DeleteIcon from '@material-ui/icons/Delete'

export const HeaderBarTop = ({ resetWords, words }) => {
  return (
    <AppBar position='static' color='default' className='header-bar-top'>
      <Toolbar>
        { !!words.length && <Button
          color='primary'
          className='header-btn'
          disabled={!words.length}
          onClick={ () => resetWords()}>
          <DeleteIcon />
        </Button> }
      </Toolbar>
    </AppBar>
  )
}
