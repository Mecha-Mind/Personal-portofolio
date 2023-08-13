import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'
import {FaTelegram} from 'react-icons/fa'
const HeaderSocial = () => {
  return (
    <div className='header__socials'>
      <a href="https://www.linkedin.com/in/hani-abdallah-59065124a/" target="_blank" rel="noreferrer"><BsLinkedin/></a>
      <a href="https://github.com/Mecha-Mind" target="_blank" rel="noreferrer"><FaGithub/></a>
      <a href="https://t.me/Mecha1Mind" target="_blank" rel="noreferrer"><FaTelegram/></a>
    </div>
  )
}

export default HeaderSocial