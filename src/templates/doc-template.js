import React from 'react';

import SEO from '../components/seo';
import DocIndex from '../components/doc-index';
import DocHeader from '../components/doc-header';

// DOC Styles
import '../styles/doc-style.css';
import '../styles/pilcrow.css';

export default function Template(props) {
  let { path, pageContext } = props;
  let { html, title, index, langIndex } = pageContext;

  return (
    <>
      <SEO title={title} />
      <DocHeader langIndex={langIndex} />
      <div className="content">
        <nav>
          <input type="text" id="search-input" className="search-input" placeholder="Search..." />
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
