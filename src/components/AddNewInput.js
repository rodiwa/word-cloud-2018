import React from 'react'
import TextField from '@material-ui/core/TextField'

export const AddNewInput = ({ addWord, text, handleChange }) => {
  return (
    <form className='input-word-form' onSubmit={e => addWord(e)}>
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
    </form>
  )
}
