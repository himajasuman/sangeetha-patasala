import PropTypes from "prop-types";
import React from "react";
import Logo from './logo';

const Header = ({ siteTitle }) => (
  <header>
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `16px`,
      }}
    >
      <p style={{ margin: 0 }}>
        <Logo />
      </p>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
