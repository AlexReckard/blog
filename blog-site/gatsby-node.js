// const path = require("path");

// exports.createPages = async ({ graphql, actions }) => {
//   const { createPage } = actions;

//   const result = await graphql(`
//     {
//       allMarkdownRemark {
//         group(field: frontmatter___category) {
//           fieldValue
//         }
//       }
//     }
//   `);

//   result.data.allMarkdownRemark.group.forEach(({ fieldValue }) => {
//     createPage({
//       path: `/category/${fieldValue}`,
//       component: path.resolve("./src/templates/category-template.js"),
//       context: {
//         category: fieldValue,
//       },
//     });
//   });
// };
