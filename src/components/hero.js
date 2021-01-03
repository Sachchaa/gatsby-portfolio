import React from 'react';
import Image from 'gatsby-image';
import { Link } from 'gatsby';
import { graphql, useStaticQuery } from 'gatsby';
import SocialLinks from '../constants/socialLinks';

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
                            <h4>React | GatsbyJS | AWS</h4>
                            <SocialLinks target="_blank" />
                            <Link to='/contact' className='btn'>
                                contact me
                            </Link>
                        </div>
                    </article>
                    <Image fluid={fluid} className='hero-img img-fluid' />
                </div>
            </header>
        </>
    );
}

export default Hero;