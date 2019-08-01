import React from "react"
import { Link } from "gatsby"
import PropTypes from "prop-types"
import { animated } from "react-spring"

const Header = ({ siteTitle, siteDescription, openNav, navOpen }) => {
  const setMenuOpenHandler = () => {
    openNav()
  }

  return (
    <animated.header className="me">
      <div className="me-content">
        <div style={{ display: "flex" }}>
          <Link to="/">
            <p className="title">{siteTitle}</p>
          </Link>
          <p className="title-desc">{siteDescription}</p>
        </div>
        <div style={{ display: "flex" }} onClick={() => setMenuOpenHandler()}>
          <p className="title-menu">Work</p>
          <div className={`hamburger-menu ${navOpen ? "open" : "closed"}`}>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </div>
    </animated.header>
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
