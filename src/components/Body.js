import React from 'react'
import { upperFirst } from 'lodash'

import { HeaderBarTop } from './HeaderBarTop'
import { AddNewInput } from './AddNewInput'
import { WorkSpaceArea } from './WorkSpaceArea'

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
    this.addWord = this.addWord.bind(this)

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
            <WorkSpaceArea
              words={this.state.words}
              editWord={this.editWord}
            />
            <AddNewInput
              addWord={this.addWord}
              text={this.state.text}
              handleChange={this.handleChange}
            />
          </div>
        </div>
      </div>
    )
  }
}
