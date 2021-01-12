import React from 'react'
import Image from 'gatsby-image'
import { graphql, useStaticQuery } from 'gatsby'
import SocialLinks from '../constants/socialLinks'
import Typical from 'react-typical'

const query = graphql`
{
    file(relativePath: { eq: "hero-img.png" }) {
        childImageSharp {
            fluid {
                ...GatsbyImageSharpFluid
            }
        }
    }
}
`
const Hero = () => {

    const {
        file: {
            childImageSharp: { fluid },
        },
    } = useStaticQuery(query)

    return (
        <>
            <header className='hero'>
                <div className='section-center hero-center'>
                    <article className='hero-info'>
                        <div>
                            <h1>i'm sachin</h1>
                            <h4>
                                I {' '}
                                <span>
                                    <Typical
                                        loop={Infinity}
                                        wrapper='b'
                                        steps={[
                                            'AM GRADUATED', 1000,
                                            'WRITE CODE', 1000,
                                            'DEVELOP WEBSITES', 1000,
                                            'DEVELOP WEB APPS', 1000,
                                            'DEVELOP MOBILE APPS', 1000,
                                        ]}
                                    />
                                </span>
                            </h4>
                            <div className='hero-social'>
                                <SocialLinks target="_blank" />
                            </div>
                        </div>
                    </article>
                    <Image fluid={fluid} className='hero-img img-fluid' />
                </div>
            </header>
        </>
    );
}

export default Hero;