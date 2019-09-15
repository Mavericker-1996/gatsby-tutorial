import React from "react"
import containerStyles from "../styles/container.module.scss"
import  { useStaticQuery } from "gatsby"


export default ({ children }) => {

  const data = useStaticQuery(
    graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `
  )

  return (
    <>
    <h1>{data.site.siteMetadata.title}</h1>
    <div className={containerStyles.container}>{children}</div>
    </>
  )
}