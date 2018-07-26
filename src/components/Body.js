import React from 'react'
import '../style/Body.css'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import { upperFirst } from 'lodash'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import DeleteIcon from '@material-ui/icons/Delete'

const HeaderBarTop = ({ resetWords, words }) => {
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

class Word extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      size: this.props.word.size,
      text: this.props.word.text,
      id: this.props.word.id,
    }

    this.changeSize = this.changeSize.bind(this)
  }

  setSize (size) {
    this.setState({ size })
    this.props.editWord({
      text: this.state.text,
      size,
      id: this.state.id
    })
  }

  changeSize () {
    const { size: currentSize } = this.state

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

  render () {
    const { size, text } = this.props.word
    return (
      <Button
        className={`word ${size}`}
        size={size}
        onClick={ () => this.changeSize() }
        >
        {text}
      </Button>
    )
  }
}

const WordCloud = ({ words, editWord }) => {
  return (
    <div className='words-container'>
      {words.map((word, idx) => <Word key={idx} word={word} editWord={editWord}/>)}
    </div>
  )
}

const HelperMessage = () => {
  return (
    <div className='word-empty-wrapper'>
      <img src='./images/helper.svg' alt='Y u no add no words' className='img'/>
      <span className='helper-text add-word'>You can add words from below</span><br />
      <span className='helper-text tap-word'>Tap a word to change its size</span>
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
    this.editWord = this.editWord.bind(this)

    // local storage
    this.localStorage = window.localStorage
  }

  componentWillMount() {
    // check if words are in local storage and load
    if (this.localStorage.getItem('words')) {
      const wordsListFromLS = JSON.parse(this.localStorage.getItem('words'))
      this.setState({
        words: wordsListFromLS
      })
    }
  }

  resetWords () {
    this.setState({
      words: []
    })

    // local storage
    this.localStorage.clear()
  }

  isAlreadyAdded(word) {
    const alreadyAddedWords = this.state.words.map(item => item.text.toLowerCase())
    return alreadyAddedWords.indexOf(word) !== -1
  }

  addWord (e) {
    e.preventDefault()
    const addText = this.state.text.trim()
    
    if (!addText) {
      return
    }

    // handle word already added scenario
    if (this.isAlreadyAdded(addText)) {
      return this.clearAddingWord()
    }

    const newItem = {
      text: upperFirst(addText),
      size: 'medium',
      id: this.state.words.length
    }
    const newWordsList = [ ...this.state.words, newItem ]

    this.setState({
      words: newWordsList
    })

    this.clearAddingWord()

    // local storage
    this.localStorage.setItem('words', JSON.stringify(newWordsList))
  }

  clearAddingWord() {
    this.setState({
      text: ''
    })
  }

  handleChange (text) {
    this.setState({
      text: text.target.value
    })
  }

  editWord (wordState) {
    let newWordsList = { ...this.state.words }
    newWordsList[wordState.id] = wordState

    newWordsList = Object.keys(newWordsList).map(item => newWordsList[item])

    this.setState({
      words: newWordsList
    })

    // local storage
    this.localStorage.setItem('words', JSON.stringify(newWordsList))
  }

  render () {
    return (
      <div className='outer-container'>
        <HeaderBarTop resetWords={this.resetWords} words={this.state.words}/>
        <div className='container' style={{ flexGrow: 1 }}>
          <div className='body'>
            <div className='main-body'>
              { this.state.words.length === 0 && <HelperMessage words={this.state.words} />}
              { this.state.words.length !== 0 && <WordCloud editWord={this.editWord} words={this.state.words} />}
            </div>
            <form className='input-word-form' onSubmit={e => this.addWord(e)}>
              <TextField
                id='name'
                label='Psst. Tap here to start..'
                value={this.state.text}
                autoFocus
                onChange={text => this.handleChange(text)}
                autoComplete='off'
                fullWidth
                margin='normal'
                helperText='Type your word here and hit [Enter]'
              />
            </form>
          </div>
        </div>
      </div>
    )
  }
}
