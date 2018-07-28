// TODO use shallow inn future
// TODO separate tests to individual components in future
import React from 'react'
import { mount } from 'enzyme'

import Body from '../../components/Body'

describe('When app starts', () => {
  let localStorage

  beforeEach(() => {
    global.localStorage = {
      getItem: jest.fn(),
      setItem: jest.fn(),
      clear: jest.fn(),
    }
  })

  it('should have a header bar at top', () => {
    const wrapper = mount(<Body />)
    expect(wrapper.find('header.header-bar-top').length).toBe(1)
  })

  it('should show a reset button/icon in header if words are added', () => {
    const wrapper = mount(<Body />).setState({ words: ['random'] })
    const headerBar = wrapper.find('header.header-bar-top')
    expect(headerBar.find('button.header-btn').length).toBeGreaterThanOrEqual(1)
  })

  it('should not show reset button if there are no words added', () => {
    const wrapper = mount(<Body />)
    const headerBar = wrapper.find('header.header-bar-top')
    expect(headerBar.find('button.header-btn').length).toBe(0)
  })

  it('should reset words when clicking reset button', () => {
    const wrapper = mount(<Body />).setState({ words: ['random'] })
    const resetBtn = wrapper.find('button.header-btn')
    
    resetBtn.simulate('click')
    const wordEmptyWrapper = wrapper.find('.word-empty-wrapper')
    expect(wordEmptyWrapper.length).toBe(1)
  })

  it('should show text input and button on initial load', () => {
    const wrapper = mount(<Body />)
    expect(wrapper.find('form').find('input').length).toBe(1)
  })

  it('should show help icon if no word is added', () => {
    const wrapper = mount(<Body />)
    const wordEmptyWrapper = wrapper.find('.word-empty-wrapper')
    const wordEmptyIcon = wordEmptyWrapper.find('img')

    // show icon if no word is added
    expect(wordEmptyWrapper.length).toBe(1)
    expect(wordEmptyIcon.length).toBe(1)
  })

  it('should show help text if no word is added', () => {
    const wrapper = mount(<Body />)
    const wordEmptyWrapper = wrapper.find('.word-empty-wrapper')
    const helperTextAddWord = wordEmptyWrapper.find('span.add-word')
    const helperTextTapWord = wordEmptyWrapper.find('span.tap-word')

    // show icon if no word is added
    expect(wordEmptyWrapper.length).toBe(1)
    expect(helperTextAddWord.length).toBe(1)
    expect(helperTextTapWord.length).toBe(1)
    expect(helperTextAddWord.text()).toBe('You can add words from below')
    expect(helperTextTapWord.text()).toBe('Tap a word to change its size')
  })

  it('should add word to cloud on entering word', () => {
    const wrapper = mount(<Body />)
    const input = wrapper.find('input[type="text"]')
    const form = wrapper.find('form.input-word-form')

    input.simulate('change', { target: { value: 'Word' } })
    form.simulate('submit')

    const wordEmptyWrapper = wrapper.find('.word-empty-wrapper')
    const wordEmptyIcon = wordEmptyWrapper.find('img')

    // remove icon when any word is added
    expect(wordEmptyWrapper.length).toBe(0)
    expect(wordEmptyIcon.length).toBe(0)

    expect(wrapper.find('.words-container').length).toBe(1)
  })

  it('should change size of word when clicked on it', () => {
    const wrapper = mount(<Body />).setState({
      words: ['Random']
    })
    const word = wrapper.find('.words-container').find('button')

    expect(word.hasClass('medium'))

    word.simulate('click')
    expect(word.hasClass('large'))

    word.simulate('click')
    expect(word.hasClass('small'))

    word.simulate('click')
    expect(word.hasClass('medium'))
  })
})
