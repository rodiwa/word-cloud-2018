import React from 'react'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import AddIcon from '@material-ui/icons/Add'
import ClearIcon from '@material-ui/icons/Clear'
import Hidden from '@material-ui/core/Hidden'

const FloatInputText = ({ addWord, text, handleChange }) => {
  return (
    <div className='mask'>
      <TextField
        id='float'
        label='Floating..'
        value={text}
        autoFocus
        onChange={text => handleChange(text)}
        autoComplete='off'
        fullWidth
        margin='normal'
        helperText='Type your word here and hit [Enter]'
      />
    </div>
  )
}

const fabStyle = {
  position: 'fixed',
  margin: '1em',
  bottom: 0,
  right: 0,
}

export default class AddNewInput extends React.PureComponent {
  constructor (props) {
    super(props)

    this.state = {
      isEditMaskOn: false
    }
  }

  render () {
    const { addWord, text, handleChange } = this.props
    const { isEditMaskOn } = this.state
  
    return (
      <form
        className='input-word-form'
        style={{ alignSelf: 'center', width: '100%' }}
        onSubmit={e => addWord(e)}>
        { !isEditMaskOn && 
          <Hidden smDown>
            <TextField
              id='name'
              label='Psst. Tap here to start..'
              value={text}
              autoFocus
              onChange={text => handleChange(text)}
              autoComplete='off'
              fullWidth
              margin='normal'
              helperText='Type your word here and hit [Enter]'
            />
          </Hidden> }
        { isEditMaskOn &&  <FloatInputText addWord={addWord} text={text} handleChange={handleChange}/>}
        <Hidden mdUp>
          <Button
            onClick={() => this.setState({ isEditMaskOn: !isEditMaskOn })}
            variant='fab'
            color={ !isEditMaskOn ? 'primary' : 'secondary' }
            style={fabStyle}>
            { !isEditMaskOn ? <AddIcon /> : <ClearIcon /> }
          </Button>
        </Hidden>
      </form>
    )
  }
}
