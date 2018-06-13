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
        <div><span>Created by RD!</span></div>
        <div className='image-footer'>
          <img src='https://www.svgrepo.com/show/9436/paper-plane.svg' className='img'/>
          <img src='https://www.svgrepo.com/show/25901/idea.svg' className='img'/>
          <img src='https://www.svgrepo.com/show/97/desk-lamp.svg' className='img'/>
          <img src='https://www.svgrepo.com/show/27449/stopwatch.svg' className='img'/>
          <img src='https://www.svgrepo.com/show/70627/pie-chart.svg' className='img'/>
        </div>
      </div>
    )
  }
}
