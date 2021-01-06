import React from 'react';
import { FaLinkedin, FaInstagram, FaGithub, FaFacebookSquare, FaMedium } from 'react-icons/fa';

const data = [
    {
        id: 1,
        icon: <FaLinkedin className='social-icon'></FaLinkedin>,
        url: 'https://www.linkedin.com/in/sachinkanishka/',
    },
    {
        id: 2,
        icon: <FaGithub className='social-icon'></FaGithub>,
        url: 'https://github.com/Sachchaa',
    },
    {
        id: 3,
        icon: <FaInstagram className='social-icon'></FaInstagram>,
        url: 'https://www.instagram.com/sachin_kanishka/',
    },
    {
        id: 4,
        icon: <FaFacebookSquare className='social-icon'></FaFacebookSquare>,
        url: 'https://www.facebook.com/sachin.kanishka/',
    },
    {
        id: 5,
        icon: <FaMedium className='social-icon'></FaMedium>,
        url: 'https://medium.com/@sachinkanishka/',
    },



]

export default ({ styleClass }) => {

    const links = data.map((link) => {
        return (
            <li key={link.id}>
                <a href={link.url} className='social-link' target="_blank">
                    {link.icon}
                </a>
            </li>
        );
    })
    return (
        <ul className={`social-links ${styleClass ? styleClass : ""}`}>
            {links}
        </ul>
    )
}