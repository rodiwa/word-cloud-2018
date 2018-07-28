import React from 'react'
import Button from '@material-ui/core/Button'

export default class Word extends React.Component {
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
