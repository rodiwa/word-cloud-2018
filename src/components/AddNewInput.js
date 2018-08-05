import React from 'react'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import AddIcon from '@material-ui/icons/Add'
import ClearIcon from '@material-ui/icons/Clear'
import Hidden from '@material-ui/core/Hidden'

const FloatInputText = ({ text, handleChange }) => {
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
  render () {
    const { addWord, text, handleChange } = this.props
    const { isEditing, startEditing, stopEditing } = this.props
  
    return (
      <form
        className='input-word-form'
        style={{ alignSelf: 'center', width: '100%' }}
        onSubmit={e => addWord(e)}>
        { isEditing &&  <FloatInputText text={text} handleChange={handleChange}/>}
        <Button
          // onClick={() => this.setState({ isEditMaskOn: !isEditMaskOn })}
          onClick={() => !isEditing ? startEditing() : stopEditing()}
          variant='fab'
          color={ !this.props.isEditing ? 'primary' : 'secondary' }
          style={fabStyle}>
          { !isEditing ? <AddIcon /> : <ClearIcon /> }
        </Button>
      </form>
    )
  }
}
