import React from 'react'
import myAbout from '../assets/about.js'

const Study = () => {

  const {titleCn, contentCn} = myAbout[0]

  return (
    <div className='page-container'>
      <h1 className='page-title'>{titleCn}</h1>
      <p className='page-content'>{contentCn}</p>
      <div className="background"></div>
    </div>
  )
}

export default Study