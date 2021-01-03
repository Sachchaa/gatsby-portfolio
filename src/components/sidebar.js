import React from 'react'
import Links from '../constants/links'
import SocialLinks from '../constants/socialLinks'
import { FaRegWindowClose } from 'react-icons/fa'
import { Link } from 'gatsby'

const Sidebar = ({ isOpen, toggleSidebar }) => {

    return (
        <aside className={`sidebar ${isOpen ? "show-sidebar" : ""}`}>
            <button className='close-btn' onClick={toggleSidebar}>
                <FaRegWindowClose />
            </button>
            <div className='side-container'>
                <Links styleClass={`${isOpen ? "sidebar-links" : ""}`} />
                <SocialLinks styleClass={`${isOpen ? "sidebar-icons" : ""}`} />
            </div>

        </aside>
    )
}

export default Sidebar
