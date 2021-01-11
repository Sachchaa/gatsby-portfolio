import React from 'react'
import { Helmet } from 'react-helmet'
import { useStaticQuery, graphql } from 'gatsby'

const query = graphql`
  {
    site {
      siteMetadata {
        author
        siteDesc: description
        siteUrl
        siteTitle: title
      }
    }
  }
`

const SEO = ({ title, description }) => {
    const { site } = useStaticQuery(query);
    const { siteDesc, siteTitle, siteUrl, author } = site.siteMetadata
    return (
        <Helmet htmlAttributes={{ lang: "en" }}>
            <meta name='title' content={`${title} | ${siteTitle}`} />
            <meta name='description' content={description || siteDesc} />
        </Helmet>
    )
}

export default SEO



