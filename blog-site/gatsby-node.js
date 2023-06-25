const path = require('path');

exports.createPages = async ({ graphql, actions }) => {
    const { createPage } = actions
    const result = await graphql(`
      query {
        categoriesGroup: allMarkdownRemark {
          group(field: frontmatter___category) {
            fieldValue
          }
        }
      }
    `)
  
    result.data.categoriesGroup.group.forEach(({ fieldValue }) => {
      createPage({
        path: `/category/${fieldValue}`,
        component: path.resolve(`./src/templates/categoryTemplate.js`),
        context: {
          category: fieldValue,
        },
      })
    })
}
