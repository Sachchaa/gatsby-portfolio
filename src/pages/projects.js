import React from 'react'
import Layout from '../components/layout'
import { graphql } from 'gatsby'
import Projects from '../components/projects'
import SEO from '../components/seo'

const ProjectsPage = ({
  data: {
    allStrapiProjects: { nodes: projects }
  }
}) => {
  return (
    <Layout>
      <SEO title='Projects' description='Projects done by me' />
      <section>
        <Projects projects={projects} title='all projects' />
      </section>
    </Layout>
  );
}

export const query = graphql`
  {
    allStrapiProjects {
      nodes {
        id
        title
        description
        github
        url
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

export default ProjectsPage
