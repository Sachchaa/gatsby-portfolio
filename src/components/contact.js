import React from 'react'
import Title from './title'

const ContactMe = () => {
    return (
        <section className='contact-component'>
            <Title title='Get In Touch' />
            <article className='contact-component-form'>
                <h3> </h3>
                <form action="https://formspree.io/f/mgeprwqw" method="POST">
                    <div className='form-component-group'>
                        <input type='text' placeholder='name' name='name' className='form-component-control' />
                        <input type='email' placeholder='email' name='email' className='form-component-control' />
                        <textarea name='message' crows='10' placeholder='message' className='form-component-control'></textarea>
                    </div>
                    <button type='submit' className='submit-btn button'>
                        submit here
                        </button>
                </form>

            </article>
        </section>
    )
}

export default ContactMe
