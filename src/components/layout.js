/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React, { useState } from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql, Link } from "gatsby"
import { useSpring } from "react-spring"
import Transition from "../components/transition"
import SideBar from "./sidebar"
//styles
import "./layout.css"
import "./styles-nav.css"
import "./styles-content.css"

const Layout = ({ children, location }) => {
  const [isNavOpen, setNavOpen] = useState(false)
  const navAnimation = useSpring({
    transform: isNavOpen ? `translate3d(70%,0,0)` : `translate3d(101%,0,0)`,
  })

  const navOpenHandler = () => {
    setNavOpen(!isNavOpen)
  }

  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
          description
        }
      }
    }
  `)

  return (
    <>
      <div className="me">
        <div className="me-content">
          <div style={{ display: "flex" }}>
            <p className="title">
              <Link to="/">{data.site.siteMetadata.title}</Link>
            </p>
            <p className="title-desc">{data.site.siteMetadata.description}</p>
          </div>
          <div style={{ display: "flex" }}>
            <p className="title-desc">Contact</p>
            <p className="title-menu" onClick={() => navOpenHandler()}>
              Menu
            </p>
          </div>
        </div>
      </div>

      <Transition location={location}>{children}</Transition>
      <SideBar
        siteTitle={data.site.siteMetadata.title}
        animation={navAnimation}
        closeNav={() => navOpenHandler()}
      />
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
