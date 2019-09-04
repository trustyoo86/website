const path = require('path');
const fs = require('fs');

const VERSION_REGEX = /^v(\d|.)+/g;
const docsFolder = path.join(__dirname, './docs');

function generateDocPath(fileLocation) {
  return (
    '/docs/' +
    path
      .relative(docsFolder, fileLocation)
      .replace(/\\+/, '/')
      .replace('.md', '')
  );
}

function generateTitle(filename) {
  return filename
    .replace(/(_|-)+/g, ' ')
    .toLowerCase()
    .replace(/(?:^|\s|-)\S/g, x => x.toUpperCase())
    .replace('.md', '');
}

let indexCache = {};
function findVersionFolder(cwd) {
  if (cwd === path.dirname(cwd)) throw new Error('Reached root!');

  let basename = path.basename(cwd);
  if (!VERSION_REGEX.test(basename)) {
    return findVersionFolder(path.dirname(cwd));
  } else {
    return cwd;
  }
}

function generateIndex(cwd) {
  let dirContent = fs.readdirSync(cwd);

  return dirContent.map(i => {
    let absPath = path.join(cwd, i);
    let stats = fs.statSync(absPath);

    let title = generateTitle(i);
    if (stats.isFile()) {
      return {
        title,
        path: generateDocPath(absPath)
      };
    } else {
      return {
        title,
        index: generateIndex(absPath)
      };
    }
  });
}

function getIndex(cwd) {
  let docsRoot = findVersionFolder(cwd);

  if (!indexCache[docsRoot]) {
    indexCache[docsRoot] = generateIndex(docsRoot);
  }

  return indexCache[docsRoot];
}

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
  queryResult.data.allMarkdownRemark.edges.forEach(({ node }) => {
    let p = generateDocPath(node.fileAbsolutePath);
    let index = getIndex(node.fileAbsolutePath);

    createPage({
      path: p,
      component: templateLocation,
      context: {
        html: node.html,
        title: generateTitle(path.basename(node.fileAbsolutePath)),
        index
      }
    });
  });
};
