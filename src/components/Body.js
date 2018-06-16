import React from 'react'
import '../style/Body.css'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import { upperFirst } from 'lodash'

const WordCloud = ({words}) => {
  return (
    <div className='words-container'>
      {words.map((word, idx) => <span key={idx} className='word'>{word}</span>)}
    </div>
  )
}

export default class Body extends React.Component {
  constructor(props) {
    super(props)
    this.state= {
      words: [],
      hasError: false,
      text: '',
    }

    this.handleChange = this.handleChange.bind(this)
  }

  addWord (e) {
    e.preventDefault()
    
    if (!this.state.text.trim()) {
      return
    }

    this.setState({
      words: [ ...this.state.words, upperFirst(this.state.text.trim()) ]
    })

    this.setState({
      text: ''
    })
  }

  handleChange (text) {
    this.setState({
      text: text.target.value
    })
  }

  render () {
    return (
      <div className='container'>
        <div>
          { this.state.words.length !== 0 && <WordCloud words={this.state.words} />}
        </div>
        <form className='input-word-form' onSubmit={e => this.addWord(e)}>
            <TextField
              id='name'
              label='My Word'
              value={this.state.text}
              autoFocus
              onChange={text => this.handleChange(text)}
              margin='normal'
              placeholder='Add yo word and Enter'
            />
            <Button
              color='primary'
              onClick={(e) => this.addWord(e)}>
              Add Word
            </Button>
        </form>
        <div className='image-footer'>
          <img src='./images/paper-plane.svg' alt='random' className='img'/>
          <img src='./images/idea.svg' alt='random' className='img'/>
          <img src='./images/desk-lamp.svg' alt='random' className='img'/>
          <img src='./images/stopwatch.svg' alt='random' className='img'/>
          <img src='./images/pie-chart.svg' alt='random' className='img'/>
        </div>
      </div>
    )
  }
}
