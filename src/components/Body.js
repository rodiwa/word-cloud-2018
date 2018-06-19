import React from 'react'
import '../style/Body.css'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import { upperFirst } from 'lodash'
import DeleteIcon from '@material-ui/icons/Delete'

const HeaderBarTop = ({ resetWords, words }) => {
  return (
    <div className='header-bar-top'>
      <Button
        color='primary'
        className='header-btn'
        disabled={!words.length}
        onClick={ () => resetWords()}>
        <DeleteIcon />
      </Button>
      
    </div>
  )
}

class Word extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      size: 'medium',
    }

    this.changeSize = this.changeSize.bind(this)
  }

  changeSize () {
    const { size: currentSize } = this.state
    let newSize= ''

    switch(currentSize) {
      case 'small':
        return this.setSize('medium')
      case 'medium':
        return this.setSize('large')
      case 'large':
        return this.setSize('small')
      default:
        return this.setSize('medium')
    }
  }

  setSize (size) {
    this.setState({ size })
  }

  render () {
    return (
      <Button
        className={`word ${this.state.size}`}
        size={this.state.size}
        onClick={ () => this.changeSize() }
        >
        {this.props.word}
      </Button>
    )
  }
}

const WordCloud = ({words}) => {
  return (
    <div className='words-container'>
      {words.map((word, idx) => <Word key={idx} word={word} />)}
    </div>
  )
}

const HelperMessage = () => {
  return (
    <div className='word-empty-wrapper'>
      <img src='./images/helper.svg' alt='Y u no add no words' className='img'/>
      <span className='helper-text'>Use the text field to start adding words</span>
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
    this.resetWords = this.resetWords.bind(this)
  }

  resetWords () {
    this.setState({
      words: []
    })
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
        <HeaderBarTop resetWords={this.resetWords} words={this.state.words}/>
        <div className='main-body'>
          { this.state.words.length === 0 && <HelperMessage words={this.state.words} />}
          { this.state.words.length !== 0 && <WordCloud words={this.state.words} />}
        </div>
        <form className='input-word-form' onSubmit={e => this.addWord(e)}>
            <TextField
              id='name'
              label='Psst. Start here..'
              value={this.state.text}
              autoFocus
              onChange={text => this.handleChange(text)}
              autoComplete='off'
              margin='normal'
            />
            <Button
              color='primary'
              className='btn-add-word'
              onClick={(e) => this.addWord(e)}>
              Add Word
            </Button>
        </form>
      </div>
    )
  }
}
