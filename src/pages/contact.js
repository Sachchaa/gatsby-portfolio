import React from 'react'
import Layout from '../components/layout'
import SEO from '../components/seo'
import ContactMe from '../components/contact'

const Contact = () => {
    return (
        <Layout>
            <SEO title='Contact Me' description='Contact Sachin Kanishka' />
            <section className='contact-page'>
                <article className='contact-form'>
                    <h3>get in touch</h3>
                    <form action="https://formspree.io/f/mgeprwqw" method="POST">
                        <div className='form-group'>
                            <input type='text' placeholder='name' name='name' className='form-control' />
                            <input type='email' placeholder='email' name='email' className='form-control' />
                            <textarea name='message' crows='10' placeholder='message' className='form-control'></textarea>
                        </div>
                        <button type='submit' className='submit-btn button'>
                            submit here
                        </button>
                    </form>
                </article>
            </section>
        </Layout>
    )
}

export default Contact
