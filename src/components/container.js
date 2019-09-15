import React from "react"
import containerStyles from "../styles/container.module.scss"
import { useStaticQuery } from "gatsby"

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
      <div className={containerStyles.container}>
        <h1>{data.site.siteMetadata.title}</h1>
        {children}
      </div>
    </>
  )
}
