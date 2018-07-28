import React from 'react'
import { shallow } from 'enzyme'

import Word from '../../components/Word'

describe('Word component', () => {
  let wrapper = null
  const text = 'Random'
  const word = [{
    text: 'Random',
    size: 'medium',
    id: 0
  }]

  beforeEach(() => {
    wrapper = shallow(<Word text={text} word={word} />)
  })

  it('should render a button item', () => {})

  it('should have size mentioned in class name', () => {})

  it('should change size on click', () => {})
})
