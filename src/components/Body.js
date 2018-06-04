import React from 'react'
import '../style/Body.css'

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
    this.wordInput = React.createRef()
    this.state= {
      words: []
    }
  }

  componentDidMount () {
    this.wordInput.current.focus()
  }

  addWord (e) {
    e.preventDefault()
    this.setState({
      words: [ ...this.state.words, this.wordInput.current.value.trim() ]
    })
    this.wordInput.current.value = ''
    this.wordInput.current.focus()
  }

  render () {
    return (
      <div className="body">
        { this.state.words.length !== 0 && <WordCloud words={this.state.words} />}
        <form className='input-word-form'>
          <input ref={this.wordInput} type="text" placeholder="add a word" />
          <button type="submit" onClick={(e) => this.addWord(e)}> Add Your Word </button>
        </form>
        <span>Created by RD!</span>
      </div>
    )
  }
}
