import React from 'react'
import { BsLinkedin, BsGithub } from "react-icons/bs"
import { SiGmail } from "react-icons/si"

const HeaderSocials = () => {
    return (
        <div className='header__socials'>
            <a href='https://www.linkedin.com/in/hamzi-se' target='_blank' rel="noreferrer"> <BsLinkedin /> </a>
            <a href='https://github.com/Hamzi-SE' target='_blank' rel="noreferrer"> <BsGithub /> </a>
            <a href='mailto:hamzii.se@gmail.com' target='_blank' rel="noreferrer"> <SiGmail /> </a>
        </div>
    )
}

export default HeaderSocials