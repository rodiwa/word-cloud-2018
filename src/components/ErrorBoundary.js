import React from 'react'

export default class extends React.Component {
  constructor (props) {
    super(props)
    this.state = { hasError: false }
  }

  componentDidCatch () {
    this.setState({
      hasError: true
    })
  }

  render () {
    if (this.state.hasError) {
      return (
        <div className='hasError'>
          <span>Something went wrong!</span>
        </div>
      )
    }

    return this.props.children
  }
}