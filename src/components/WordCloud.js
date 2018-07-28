import React from 'react'

import Word from './Word'

export const WordCloud = ({ words, editWord }) => {
  return (
    <div className='words-container'>
      {words.map((word, idx) => <Word key={idx} word={word} editWord={editWord}/>)}
    </div>
  )
}
