import React from 'react'
import avatar from '../pictures/header01.png'

const Header = () => {
  return (
    <div className="header-container">
      <section className="left">
        <h2>Hello, My name is</h2>
        <h1>Chang Kai Hao</h1>
        <div className='title'>
          <div className="title-wrapper">
            <div className="title-item">Web Developer</div>
            <div className="title-item">UI/UX Designer</div>
            <div className="title-item">Photographer</div>
          </div>
        </div>
        <p>I am a front-end developer, I like to wirte webpage and share with people. Especial for using colorful and amazing style to make page even better to browse. More over, I like to discuss every knowledge in different field, no matter who you are, if you feel interesting to share knowledge, or if you are looking for a web-developer or front-end developer, feel free to contact me.</p>
      </section>
      <section className="right">
        <div className="avatar-container">
          <img src={avatar} alt="avatar" />
        </div>
      </section>
    </div>
  )
}

export default Header