import React from 'react';
import { Link } from 'gatsby';

const data = [
    {
        id: 1,
        text: 'home',
        url: '/',
    },
    {
        id: 2,
        text: 'about',
        url: '/about/'
    },
    {
        id: 3,
        text: 'projects',
        url: '/projects/',
    },
    {
        id: 5,
        text: 'blog',
        url: '/blog/',
    },
    {
        id: 5,
        text: 'contact',
        url: '/contact/',
    },
]

export default ({ styleClass }) => {
    const links = data.map((link) => {
        return (
            <li key={link.id}>
                <Link to={link.url}>{link.text}</Link>
            </li>
        );
    })
    return (
        <ul className={`page-links ${styleClass ? styleClass : ""}`}>
            {links}
        </ul>
    );
}