import React from "react"
import { Link } from "gatsby"

import '../css/main.css';

import Hero from '../components/hero';

import Layout from '../components/layout'
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <Hero />
  </Layout>
)

export default IndexPage
