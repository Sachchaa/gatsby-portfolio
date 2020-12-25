import React from 'react';
import { FaLinkedin, FaInstagram, FaGithub } from 'react-icons/fa';
import links from './links';

const data = [
    {
        id: 1,
        icon: <FaGithub></FaGithub>,
        url: 'https://github.com/Sachchaa',
    },
    {
        id: 2,
        icon: <FaLinkedin></FaLinkedin>,
        url: 'https://www.linkedin.com/in/sachinkanishka/',
    },
    {
        id: 3,
        icon: <FaInstagram></FaInstagram>,
        url: 'https://www.instagram.com/sachin_kanishka/'
    }

]

export default ({ styleClass }) => {

    const links = data.map((link) => {
        return (
            <li key={link.id}>
                <a href={link.url} className='social-link'>
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