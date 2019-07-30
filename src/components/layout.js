/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React, { useState } from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import { useSpring } from "react-spring"
import Transition from "../components/transition"
import Header from "./header"
import SideBar from "./sidebar"
//styles
import "./layout.css"
import "./styles-header.css"
import "./styles-nav.css"
import "./styles-content.css"
import "./styles-home.css"

const Layout = ({ children, location }) => {
  const [isNavOpen, setNavOpen] = useState(false)
  const navAnimation = useSpring({
    transform: isNavOpen ? `translate3d(0%,0,0)` : `translate3d(100%,0,0)`,
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
      <SideBar animation={navAnimation} closeNav={() => navOpenHandler()} />
      <Header
        siteTitle={data.site.siteMetadata.title}
        siteDescription={data.site.siteMetadata.description}
        openNav={() => navOpenHandler()}
        navOpen={isNavOpen}
      />

      <Transition location={location}>{children}</Transition>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
