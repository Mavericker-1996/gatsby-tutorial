const path = require(`path`)

const { createFilePath } = require("gatsby-source-filesystem")
exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions
  if (node.internal.type === `MarkdownRemark`) {
    // traverse the “node graph” to its parent File node,
    // const fileNode = getNode(node.parent)
    // console.log('\n', fileNode.relativePath)

    // createFilePath 用来获取 slug
    // createNodeField 用来创造一个新的字段
    const slug = createFilePath({ node, getNode, basePath: `pages` })
    createNodeField({
      node,
      name: `slug`,
      value: slug,
    })
  }
}
exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions // 调用 actions 中的 createPage 函数来创建页面
  const result = await graphql(`
    query {
      allMarkdownRemark {
        edges {
          node {
            fields {
              slug
            }
          }
        }
      }
    }
  `)
  // console.log(JSON.stringify(result, null, 4))
  result.data.allMarkdownRemark.edges.forEach(({ node }) => {
    createPage({
      path: node.fields.slug,
      component: path.resolve(`./src/templates/blog-post.js`),
      context: {
        slug: node.fields.slug,
      }
    })
  })
}
