import React from 'react'
import { Link } from 'gatsby'
import { graphql } from 'gatsby'

import '../css/main.css';

import Hero from '../components/hero';
import Services from '../components/services';
import Jobs from '../components/jobs';
import Projects from '../components/projects';
import Layout from '../components/layout'
import ContactMe from '../components/contact'
import SEO from '../components/seo'

const IndexPage = ({ data }) => {
  const { allStrapiProjects: { nodes: projects } } = data

  return (
    <Layout>
      <SEO title="Home" description="home page" />
      <Hero />
      <Services />
      <Jobs />
      <Projects projects={projects} title='featured projects' showLink />
      <ContactMe />
    </Layout >
  )
}

export const query = graphql`
  {
    allStrapiProjects(filter: {featured: {eq: true}}) {
      nodes {
        id
        title
        description
        github
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

export default IndexPage
