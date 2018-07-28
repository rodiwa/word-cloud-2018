import React from 'react'

import { HelperMessage } from './HelperMessage'
import { WordCloud } from './WordCloud'

export const WorkSpaceArea = ({ words, editWord }) => {
  return (
    <div className='main-body'>
      { words.length === 0 && <HelperMessage words={words} />}
      { words.length !== 0 && <WordCloud editWord={editWord} words={words} />}
    </div>
  )
}
