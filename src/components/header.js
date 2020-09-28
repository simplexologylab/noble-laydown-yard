import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

import { Button } from "grommet"

const Header = ({ siteTitle }) => (
  <header
    style={{
      background: `#5A5A5A`,
      marginBottom: `1.45rem`,
    }}
  >
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `1.45rem 1.0875rem`,
      }}
    >
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: `white`,
            textDecoration: `none`,
          }}
        >
          {siteTitle}
        </Link>
      </h1>
      <Button
        primary
        label="Contact Information"
        color="#bb0000"
        margin="xsmall"
        href="#contact-info"
      />
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
