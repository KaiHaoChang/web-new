import React from 'react'
import myAbout from '../assets/about.js'

const Language = () => {

  const {titleCn, contentCn, contentCn2, contentCn3} = myAbout[2]

  return (
    <div className='page-container'>
      <h1 className='page-title'>{titleCn}</h1>
      <p className='page-content'>{contentCn}</p>
      <p className='page-content'>{contentCn2}</p>
      <p className='page-content'>{contentCn3}</p>
      <div className="background"></div>
    </div>
  )
}

export default Language