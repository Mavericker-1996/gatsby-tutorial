import React from "react"
import Header from "../components/header"
import { graphql } from "gatsby"

export default ({ data }) => (
  <div style={{ color: `teal` }}>
    <Header headerText="About zuoqi"/>
    <h2>About {data.site.siteMetadata.title}</h2>
    <p>Such wow. Very React.</p>
  </div>
)

export const query = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
