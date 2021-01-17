import React from 'react'
import Layout from '../components/layout'
import { graphql } from 'gatsby'
import Title from '../components/title'
import Image from 'gatsby-image'
import SEO from '../components/seo'
import { } from 'react-icons/fa'

const About = ({ data: { about: { nodes } } }) => {

  const { title, stack, info, image } = nodes[0]
  return (
    <Layout>
      <SEO title='About Me' description='About Sachin Kanishka' />
      <section className='about-page'>
        <div className='section-center about-center'>
          <Image fluid={image.childImageSharp.fluid} className='about-img' />
          <article className='about-text'>
            <Title title={title} />
            <p>{info}</p>
            <div className='about-stack'>
              {stack.map((item) => {
                return <span key={item.id}>{item.title}</span>
              })}
            </div>

          </article>
        </div>

      </section>
    </Layout>
  )
}

export const query = graphql`
  {
    about:allStrapiAbout {
      nodes {
        title
        info
        image {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
        stack {
          id
          title
        }
      }
    }
  }
`


export default About
