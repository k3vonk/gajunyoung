import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"

const Portfolio = () => (
  <Layout>
    <Seo title="Portfolio" />
    <h1>Hi from the portfolio page</h1>
    <p>Welcome to page portfolio</p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default Portfolio
