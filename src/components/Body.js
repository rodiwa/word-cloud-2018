import React from 'react'
import '../style/Body.css'
import TextField from 'material-ui/TextField'
import FlatButton from 'material-ui/FlatButton'
import ErrorBoundary from './ErrorBoundary'
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
          <ErrorBoundary>
            <TextField
              id='name'
              label='Name'
              value={this.state.text}
              autoFocus
              onChange={text => this.handleChange(text)}
              margin='normal'
              placeholder='Add yo word and Enter'
            />
            <FlatButton
              label='Add Word'
              primary
              onClick={(e) => this.addWord(e)}
            />
          </ErrorBoundary>
        </form>
        <div className='image-footer'>
          <img src='https://www.svgrepo.com/show/9436/paper-plane.svg' alt='random' className='img'/>
          <img src='https://www.svgrepo.com/show/25901/idea.svg' alt='random' className='img'/>
          <img src='https://www.svgrepo.com/show/97/desk-lamp.svg' alt='random' className='img'/>
          <img src='https://www.svgrepo.com/show/27449/stopwatch.svg' alt='random' className='img'/>
          <img src='https://www.svgrepo.com/show/70627/pie-chart.svg' alt='random' className='img'/>
        </div>
      </div>
    )
  }
}
