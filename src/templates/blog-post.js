import React from "react"
import { graphql } from "gatsby"
import Container from "../components/container"

export default ({ data }) => {
  const post = data.markdownRemark
  return (
    <Container>
      <h1>{post.frontmatter.title}</h1>
      <div dangerouslySetInnerHTML={{__html:post.html}} />
    </Container>
  )
}

// 从 context 中传过来的数据会自动作为 query
export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
      }
    }
  }
`