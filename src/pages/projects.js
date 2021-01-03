import React from 'react'
import Layout from '../components/layout'
import { graphql } from 'gatsby'
import Projects from '../components/projects'

const ProjectsPage = ({
    data: {
        allStrapiProjects: { nodes: projects }
    }
}) => {
    return (
        <Layout>
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
