import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"

const Contact = () => (
  <Layout>
    <Seo title="Contact" />
    <h1>Hi from the Contact page</h1>
    <p>Welcome to page Contact</p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default Contact
