import React from "react"
import { Link } from "gatsby"
import PropTypes from "prop-types"

const Header = ({ siteTitle, siteDescription, openNav, navOpen }) => {
  const setMenuOpenHandler = () => {
    openNav()
  }

  return (
    <header className="me">
      <div className="me-content">
        <div style={{ display: "flex" }}>
          <p className="title">
            <Link to="/">{siteTitle}</Link>
          </p>
          <p className="title-desc">{siteDescription}</p>
        </div>
        <div style={{ display: "flex" }} onClick={() => setMenuOpenHandler()}>
          <p className="title-menu">Menu</p>
          <div className={`hamburger-menu ${navOpen ? "open" : "closed"}`}>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </div>
    </header>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
  siteDescription: PropTypes.string,
  openNav: PropTypes.func,
  navOpen: PropTypes.bool,
}

Header.defaultProps = {
  siteTitle: ``,
  siteDescription: ``,
}

export default Header
