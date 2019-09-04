import React from 'react';

import logo from '../images/logo.svg';
import icon from '../images/parcel-icon.png';

export default function DocHeader() {
  return (
    <header>
      <a className="logo" href="/">
        <img className="parcel" src={icon} height="35" />
        <img className="type" src={logo} alt="Parcel" />
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
}
