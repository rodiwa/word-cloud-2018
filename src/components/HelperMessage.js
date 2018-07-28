import React from 'react'

export const HelperMessage = () => {
  return (
    <div className='word-empty-wrapper'>
      <img src='./images/helper.svg' alt='Y u no add no words' className='img'/>
      <span className='helper-text add-word'>You can add words from below</span><br />
      <span className='helper-text tap-word'>Tap a word to change its size</span>
    </div>
  )
}
