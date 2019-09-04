import React from 'react';

import SEO from '../components/seo';
import DocIndex from '../components/doc-index';
import DocHeader from '../components/doc-header';

// DOC Styles
import '../styles/doc-style.css';
import '../styles/pilcrow.css';

export default function Template(props) {
  let { path, pageContext } = props;
  let { html, title, index } = pageContext;

  return (
    <>
      <SEO title={title} />
      <DocHeader />
      <div className="content">
        <nav>
          <DocIndex index={index} />
        </nav>
        <main>
          <div dangerouslySetInnerHTML={{ __html: html }}></div>

          <h2>Help us improve the docs</h2>
          <p>
            If something is missing or not entirely clear, please{' '}
            <a href={`https://github.com/parcel-bundler/website/edit/master${path}.md`}>edit this page</a> or{' '}
            <a href="https://github.com/parcel-bundler/website/issues">file an issue</a>.
          </p>
        </main>
      </div>
    </>
  );
}
