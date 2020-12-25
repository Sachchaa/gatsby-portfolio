import React from 'react';
import PageLinks from '../constants/links';
import { FaAlignCenter } from 'react-icons/fa';

import 'bootstrap/dist/css/bootstrap.min.css';

const Navbar = () => {
    return (
        <nav className='nav-bar navbar navbar-expand-lg'>
            <div className='nav-center'>
                <div className='nav-header'>
                    <button type='button' className='navbar-toggler toggle-btn'>
                        <FaAlignCenter />
                    </button>
                </div>
                <PageLinks styleClass='nav-links' />
            </div>
        </nav>
    )
}

export default Navbar;
