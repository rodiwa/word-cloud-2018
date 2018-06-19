import React from 'react'
import { mount } from 'enzyme'

import Body from '../../components/Body'

describe('When app starts', () => {
  it('should have a header bar at top', () => {
    const wrapper = mount(<Body />)
    expect(wrapper.find('div.header-bar-top').length).toBe(1)
  })

  it('should have a reset button/icon in header bar at top', () => {
    const wrapper = mount(<Body />)
    const headerBar = wrapper.find('div.header-bar-top')
    expect(headerBar.find('button.header-btn').length).toBeGreaterThanOrEqual(1)
  })

  it('should reset words when clicking reset button', () => {
    const wrapper = mount(<Body />)
    const resetBtn = wrapper.find('button.header-btn')
    const wordEmptyWrapper = wrapper.find('.word-empty-wrapper')

    resetBtn.simulate('click')
    expect(wordEmptyWrapper.length).toBe(1)
  })

  it('should show text input and button on initial load', () => {
    const wrapper = mount(<Body />)
    expect(wrapper.find('form').find('input').length).toBe(1)
    expect(wrapper.find('form').find('button').length).toBe(1)
  })

  it('should show icon if no word is added', () => {
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
    const wordEmptyText = wordEmptyWrapper.find('span')

    // show icon if no word is added
    expect(wordEmptyWrapper.length).toBe(1)
    expect(wordEmptyText.length).toBe(1)
    expect(wordEmptyText.text()).toBe('Use the text field to start adding words')
  })

  it('should add word to cloud on entering word', () => {
    const wrapper = mount(<Body />)
    const input = wrapper.find('input[type="text"]')
    const button = wrapper.find('button.btn-add-word')

    input.simulate('change', { target: { value: 'Word' } })
    button.simulate('click')

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

describe.skip('planned scenarios', () => {
  it('should show add category icon if any word is added', () => {

  })

  it('should show input to enter category name', () => {

  })

  it('should not do anthing if we cancel adding category name', () => {

  })

  it('should add category section when category name is added', () => {

  })

  it('should show category icon if any 1 category has been added', () => {

  })

  it('should show saved categories when i click category button', () => {

  })

  it('should show add category button as last card on category page', () => {

  })

  it('should show add category button in header on category page', () => {

  })
})