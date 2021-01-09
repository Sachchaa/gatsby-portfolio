import React from 'react'
import Navbar from './navbar'
import Footer from './footer'
import Sidebar from './sidebar'
import Scroll from './scroll'

const Layout = ({ children }) => {

  const [isOpen, setIsOpen] = React.useState(false);
  const toggleSidebar = () => {
    setIsOpen(!isOpen)
  }
  return (
    <>
      <Navbar toggleSidebar={toggleSidebar} />
      <Sidebar isOpen={isOpen} toggleSidebar={toggleSidebar} />
      <Scroll showBelow={250} />
      {children}
      <Footer />
    </>
  )
}

export default Layout;
