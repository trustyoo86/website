const path = require('path');
const fs = require('fs');
const findUp = require('find-up');

exports.createPages = async ({ actions, graphql, reporter }) => {
  let { createPage } = actions;

  let queryResult = await graphql(`
    {
      allMarkdownRemark {
        edges {
          node {
            html
            fileAbsolutePath
            frontmatter {
              title
            }
          }
        }
      }
    }
  `);

  // Handle errors
  if (queryResult.errors) {
    reporter.panicOnBuild('Error while running GraphQL query.');
    return;
  }

  let templateLocation = path.resolve('src/templates/doc-template.js');
  let docsFolder = path.join(__dirname, './docs');
  queryResult.data.allMarkdownRemark.edges.forEach(({ node }) => {
    let p =
      '/docs/' +
      path
        .relative(docsFolder, node.fileAbsolutePath)
        .replace(/\\+/, '/')
        .replace('.md', '');

    // TODO: Ceate these indexes automatically and add a cache...
    let index = JSON.parse(
      fs.readFileSync(
        findUp.sync('index.json', {
          cwd: path.dirname(node.fileAbsolutePath)
        }),
        'utf8'
      )
    );

    createPage({
      path: p,
      component: templateLocation,
      context: {
        html: node.html,
        title: node.frontmatter.title,
        index
      }
    });
  });
};
