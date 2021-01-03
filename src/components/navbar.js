import React from 'react';
import PageLinks from '../constants/links';
import { FaAlignCenter } from 'react-icons/fa';

import 'bootstrap/dist/css/bootstrap.min.css';

const Navbar = ({ toggleSidebar }) => {
    return (
        <nav className='nav-bar navbar navbar-expand-lg'>
            <div className='nav-center'>
                <div className='nav-header'>
                    <button type='button' className='toggle-btn' onClick={toggleSidebar}>
                        <FaAlignCenter />
                    </button>
                </div>
                <PageLinks styleClass='nav-links' />
            </div>
        </nav>
    )
}

export default Navbar;
