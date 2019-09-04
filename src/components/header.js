import { Link } from 'gatsby';
import React from 'react';

const Header = ({ siteTitle }) => (
  <header>
    <div>
      <h1>
        <Link
          to="/"
          style={{
            color: 'white',
            textDecoration: 'none'
          }}
        >
          {siteTitle}
        </Link>
      </h1>
    </div>
  </header>
);

export default Header;
