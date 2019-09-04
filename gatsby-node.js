const path = require('path');
const fs = require('fs');

const VERSION_REGEX = /^v(\d|.)+/;
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

function generateLanguageIndex() {
  let dirContent = fs.readdirSync(docsFolder);

  return dirContent.map(i => {
    let absPath = path.join(docsFolder, i);

    if (!fs.statSync(absPath).isDirectory()) return;
    return {
      lang: i,
      versions: fs.readdirSync(absPath).filter(v => VERSION_REGEX.test(v))
    };
  });
}

function getIndex(cwd, indexCache = {}) {
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

  let langIndex = generateLanguageIndex();
  let indexCache = {};
  let templateLocation = path.resolve('src/templates/doc-template.js');
  queryResult.data.allMarkdownRemark.edges.forEach(({ node }) => {
    let p = generateDocPath(node.fileAbsolutePath);
    let index = getIndex(path.dirname(node.fileAbsolutePath), indexCache);

    createPage({
      path: p,
      component: templateLocation,
      context: {
        html: node.html,
        title: generateTitle(path.basename(node.fileAbsolutePath)),
        index,
        langIndex
      }
    });
  });
};
