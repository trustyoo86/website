import React from 'react';

import SEO from '../components/seo';

// DOC Styles
import '../styles/doc-style.css';
import '../styles/pilcrow.css';

const DocHeader = () => {
  return (
    <header>
      <a className="logo" href="/">
        <img
          className="parcel"
          src="assets/parcel.png"
          srcSet="assets/parcel@2x.png 2x, assets/parcel@3x.png 3x"
          height="30"
        />
        <img className="type" src="assets/logo.svg" alt="Parcel" />
      </a>
      <div className="links">
        <input type="text" id="search-input" className="search-input" placeholder="Search..." />
        <form className="languages">
          <select
            className="language-dropdown"
            onChange="location = this.options[this.selectedIndex].value + location.pathname;"
          >
            <option className="en" value="https://en.parceljs.org" selected>
              English
            </option>
            <option className="es" value="https://es.parceljs.org">
              Español
            </option>
            <option className="fr" value="https://fr.parceljs.org">
              Français
            </option>
            <option className="it" value="https://it.parceljs.org">
              Italiano
            </option>
            <option className="ja" value="https://ja.parceljs.org">
              日本語
            </option>
            <option className="ko" value="https://ko.parceljs.org">
              한국어
            </option>
            <option className="pl" value="https://pl.parceljs.org">
              Polski
            </option>
            <option className="pt" value="https://pt.parceljs.org">
              Português
            </option>
            <option className="ru" value="https://ru.parceljs.org">
              Русский
            </option>
            <option className="uk" value="https://uk.parceljs.org">
              Українська
            </option>
            <option className="zh" value="https://zh.parceljs.org">
              简体中文
            </option>
            <option className="zh-tw" value="https://zh-tw.parceljs.org">
              繁體中文
            </option>
          </select>
        </form>
        <a href="https://github.com/parcel-bundler/parcel" target="_blank" rel="noopener noreferrer">
          GitHub
        </a>
        <a href="https://cottonbureau.com/products/parcel-t-shirt" target="_blank" rel="noopener noreferrer">
          👕 Store
        </a>
      </div>
    </header>
  );
};

export default function Template(props) {
  let { path, pageContext } = props;
  let { html, title } = pageContext;

  return (
    <>
      <SEO title={title} />
      <DocHeader />
      <div className="content">
        <nav>
          <h3>Getting Started</h3>
          <ul>
            <li>
              <a href="getting_started.html">🚀 Getting Started</a>
            </li>
            <li>
              <a href="assets.html">📦 Assets</a>
            </li>
            <li>
              <a href="transforms.html">🐠 Transforms</a>
            </li>
          </ul>
          <h3>Features</h3>
          <ul>
            <li>
              <a href="code_splitting.html">✂️ Code Splitting</a>
            </li>
            <li>
              <a href="hmr.html">🔥 Hot Module Replacement</a>
            </li>
            <li>
              <a href="production.html">✨ Production</a>
            </li>
            <li>
              <a href="cli.html">🖥 CLI</a>
            </li>
            <li>
              <a href="recipes.html">🍰 Recipes</a>
            </li>
            <li>
              <a href="env.html">🌳 Environment Variables</a>
            </li>
            <li>
              <a href="module_resolution.html">📔 Module Resolution</a>
            </li>
          </ul>
          <h3>📦 Asset Types</h3>
          <ul>
            <li>
              <a href="javascript.html">
                <img src="assets/icon-javascript.svg" />
                JavaScript
              </a>
            </li>
            <li>
              <a href="reasonML.html">
                <img src="assets/icon-reason-ml.svg" />
                ReasonML
              </a>
            </li>
            <li>
              <a href="css.html">
                <img src="assets/icon-css.svg" />
                CSS
              </a>
            </li>
            <li>
              <a href="scss.html">
                <img src="assets/icon-sass.svg" />
                SCSS
              </a>
            </li>
            <li>
              <a href="less.html">
                <img src="assets/icon-less.svg" />
                LESS
              </a>
            </li>
            <li>
              <a href="stylus.html">
                <img src="assets/icon-stylus.svg" />
                Stylus
              </a>
            </li>
            <li>
              <a href="html.html">
                <img src="assets/icon-html5.svg" />
                HTML
              </a>
            </li>
            <li>
              <a href="typeScript.html">
                <img src="assets/icon-typescript.svg" />
                TypeScript
              </a>
            </li>
            <li>
              <a href="coffeeScript.html">
                <img src="assets/icon-coffeescript.svg" />
                CoffeeScript
              </a>
            </li>
            <li>
              <a href="vue.html">
                <img src="assets/icon-vuejs.svg" />
                Vue
              </a>
            </li>
            <li>
              <a href="json.html">
                <img src="assets/icon-json.svg" />
                JSON
              </a>
            </li>
            <li>
              <a href="graphQL.html">
                <img src="assets/icon-graphql.svg" />
                GraphQL
              </a>
            </li>
            <li>
              <a href="rust.html">
                <img src="assets/icon-rust.svg" />
                Rust
              </a>
            </li>
            <li>
              <a href="webAssembly.html">
                <img src="assets/icon-webassembly.svg" />
                WebAssembly
              </a>
            </li>
            <li>
              <a href="elm.html">
                <img src="assets/icon-elm.svg" />
                Elm
              </a>
            </li>
            <li>
              <a href="yaml.html">
                <img src="assets/icon-yaml.svg" />
                YAML
              </a>
            </li>
            <li>
              <a href="toml.html">
                <img src="assets/icon-toml.svg" />
                TOML
              </a>
            </li>
            <li>
              <a href="openGL.html">
                <img src="assets/icon-openGL.svg" />
                OpenGL
              </a>
            </li>
            <li>
              <a href="pug.html">
                <img src="assets/icon-pug.svg" />
                Pug
              </a>
            </li>
            <li>
              <a href="webManifest.html">WebManifest</a>
            </li>
          </ul>
          <h3>Advanced</h3>
          <ul>
            <li>
              <a href="how_it_works.html">🛠 How It Works</a>
            </li>
            <li>
              <a href="asset_types.html">📝 Asset Types</a>
            </li>
            <li>
              <a href="plugins.html">🔌 Plugins</a>
            </li>
            <li>
              <a href="packagers.html">📦 Packagers</a>
            </li>
            <li>
              <a href="api.html">📚 Bundler API</a>
            </li>
          </ul>
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
