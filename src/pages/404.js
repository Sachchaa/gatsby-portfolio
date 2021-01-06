import React from "react"

import Layout from "../components/layout"
import { Link } from 'gatsby'

const NotFoundPage = () => {
  return (
    <Layout>
      <main className='error-page'>
        <div className='error-container'>
          <h1>Page not found</h1>
          <Link to='/' className='btn'>back home</Link>
        </div>
      </main>
    </Layout>
  );
}
export default NotFoundPage
