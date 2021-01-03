import React from 'react';
import { FaLinkedin, FaInstagram, FaGithub, FaFacebookSquare } from 'react-icons/fa';

const data = [
    {
        id: 1,
        icon: <FaLinkedin styleClass='social-icon'></FaLinkedin>,
        url: 'https://www.linkedin.com/in/sachinkanishka/',
    },
    {
        id: 2,
        icon: <FaGithub styleClass='social-icon'></FaGithub>,
        url: 'https://github.com/Sachchaa',
    },
    {
        id: 3,
        icon: <FaInstagram styleClass='social-icon'></FaInstagram>,
        url: 'https://www.instagram.com/sachin_kanishka/',
    },
    {
        id: 4,
        icon: <FaFacebookSquare styleClass='social-icon'></FaFacebookSquare>,
        url: 'https://www.facebook.com/sachin.kanishka/',
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