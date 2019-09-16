import React from "react"
import { Link, graphql } from "gatsby"
import containerStyles from "../styles/container.module.scss"
import Header from "../components/header"
import Container from "../components/container"

console.log(containerStyles)

export default ({ data }) => {
  console.log(data)
  return (
    <Container>
      <div className={containerStyles.container}>
        <Link to="/about/">About</Link>
        <br />
        <Link to="/user/">user</Link>
        <br />
        <Link to="/my-files/">my-files</Link>
        <Header headerText="Hello Gatsby!" />
      </div>

      <h4>{data.allMarkdownRemark.totalCount} Posts</h4>
      {data.allMarkdownRemark.edges.map(({ node }) => (
        <div key={node.id}>
          <Link
            to={node.fields.slug}
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <h3>
              {node.frontmatter.title}{" "}
              <span style={{ color: "#bbb" }}>- {node.frontmatter.date}</span>
            </h3>
            <p>{node.excerpt}</p>
          </Link>
        </div>
      ))}
    </Container>
  )
}

export const query = graphql`
  query {
    allMarkdownRemark {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "DD MMMM, YYYY")
          }
          fields {
            slug
          }
          excerpt
        }
      }
    }
  }
`
