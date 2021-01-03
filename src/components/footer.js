import { format } from 'prettier';
import React from 'react'
import SocialLinks from '../constants/socialLinks'

const Footer = () => {
    return (
        <footer className='footer'>
            <div>
                <SocialLinks styleClass='footer-links' />
                <h4>
                    <span> CODESUTRA </span> &copy; {new Date().getFullYear()} &nbsp; all rights reserved
                </h4>
            </div>
        </footer>
    );
}

export default Footer
