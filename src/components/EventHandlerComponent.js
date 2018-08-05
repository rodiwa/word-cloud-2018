import React from 'react'

export default class EventHandlerComponent extends React.PureComponent {
  componentDidMount() {
    document.addEventListener('keyup', this.handleEscapeEnter)
  }

  componentWillUnmount() {
    document.removeEventListener('keyup', this.handleEscapeEnter)
  }

  handleEscapeEnter = event => {
    const isFocusOnBody = document.activeElement.tagName.toLowerCase() === 'body'
    const isFocusOnInput = document.activeElement.tagName.toLowerCase() === 'input'
    const isEnterKey = event.keyCode === 13
    const isEscKey = event.keyCode === 27
    if (isFocusOnBody && isEnterKey) {
      this.props.startEditing()
    }
  
    if (isFocusOnInput && isEscKey) {
      this.props.stopEditing()
    }
  }

  render () {
    console.log(this.props)
    return null
  }
}
