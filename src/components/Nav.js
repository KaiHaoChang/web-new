import React from 'react'
import {Link} from 'react-router-dom'

const Nav = () => {
  return (
    <div className='nav-container'>
      <Link to='/'><h1>HOME</h1></Link>
      <Link to='/1'><h1>Studing</h1></Link>
      <Link to='/2'><h1>Experience</h1></Link>
      <Link to='/3'><h1>College</h1></Link>
      <Link to='/4'><h1>Conclusion</h1></Link>
    </div>
  )
}

export default Nav