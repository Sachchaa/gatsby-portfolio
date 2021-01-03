import React from 'react';
import { FaLinkedin, FaInstagram, FaGithub } from 'react-icons/fa';

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
    }

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