import React from 'react'
import ReactDOM from 'react-dom'
import { shallow, mount } from 'enzyme'

import Body from '../../components/Body'

describe('When app starts', () => {
  it('should show text input and button on initial load', () => {
    const wrapper = mount(<Body />)
    expect(wrapper.find('form').find('input[type="text"]').length).toBe(1)
    expect(wrapper.find('form').find('button').length).toBe(1)
  })

  it('should add word to cloud on entering word', () => {
    const wrapper = mount(<Body />)
    const input = wrapper.find('input[type="text"]')
    const button = wrapper.find('button')

    input.simulate('change', { target: { value: 'Word' } })
    button.simulate('click')

    expect(wrapper.find('.words-container').length).toBe(1)
  })

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