import React from 'react'
import {Link} from 'react-router-dom'
import myAbout from '../assets/about.js'

const Body = () => {
  return (
    <div className="body-container">
      <h1 className='title'>自我介紹區</h1>
      {myAbout.map(item => {
        const {titleCn, contentCn} = item
        return (
          <Link to={`/${item.id}`} key={item.id} className="content-box">
            <h1>{titleCn}</h1>
            <p>{contentCn}</p>
          </Link>
        )
      })}
    </div>
  )
}

export default Body