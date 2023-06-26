const path = require('path');
const { createFilePath } = require('gatsby-source-filesystem');

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions;
  if (node.internal.type === `MarkdownRemark`) {
    const slug = createFilePath({ node, getNode });
    createNodeField({
      node,
      name: `slug`,
      value: slug,
    });
  }
};

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;

  // For Article Pages
  const result = await graphql(`
    query {
      allMarkdownRemark {
        edges {
          node {
            fields {
              slug
            }
            frontmatter {
              category
            }
          }
        }
      }
    }
  `);

  // Handle errors
  if (result.errors) {
    throw result.errors;
  }

  result.data.allMarkdownRemark.edges.forEach(({ node }) => {
    const categorySlug = node.frontmatter.category.toLowerCase().replace(/ /g, "-");
    createPage({
      path: `/category/${categorySlug}${node.fields.slug}`,
      component: path.resolve('./src/templates/articleTemplate.js'),
      context: {
        slug: node.fields.slug,
      },
    });
  });

  // For Category Pages
  const resultCategory = await graphql(`
    query {
      allMarkdownRemark {
        group(field: frontmatter___category) {
          fieldValue
        }
      }
    }
  `);

  resultCategory.data.allMarkdownRemark.group.forEach(({ fieldValue }) => {
    createPage({
      path: `/category/${fieldValue}`,
      component: path.resolve(`./src/templates/categoryTemplate.js`),
      context: {
        category: fieldValue,
      },
    });
  });
};
