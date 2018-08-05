import React from 'react'

export default class EventHandlerComponent extends React.PureComponent {
  componentDidMount() {
    document.addEventListener('keyup', this.handleEscapeEnter)
    document.addEventListener('click', this.handleStrayClick)
  }

  componentWillUnmount() {
    document.removeEventListener('keyup', this.handleEscapeEnter)
  }

  handleStrayClick = event => {
    const isStaryClick = event.target.tagName.toLowerCase() === 'div'
    if (isStaryClick) {
      this.props.stopEditing()
    }
  }

  handleEscapeEnter = event => {
    const isFocusOnBody = document.activeElement.tagName.toLowerCase() === 'body'
    const isEnterKey = event.keyCode === 13
    const isEscKey = event.keyCode === 27
    if (isFocusOnBody && isEnterKey) {
      this.props.startEditing()
    }
  
    if (isEscKey) {
      this.props.stopEditing()
    }
  }

  render () {
    return null
  }
}
