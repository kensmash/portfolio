import React from "react"
import PropTypes from "prop-types"
import { animated } from "react-spring"
import Img from "gatsby-image"
import { graphql, useStaticQuery, Link } from "gatsby"

const SideBar = ({ animation, closeNav }) => {
  const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark {
        totalCount
        edges {
          node {
            id
            frontmatter {
              title
              tag
              thumbnailimage {
                childImageSharp {
                  sizes(quality: 70, maxWidth: 300) {
                    ...GatsbyImageSharpSizes
                  }
                }
              }
            }
            fields {
              slug
            }
          }
        }
      }
    }
  `)

  const webItems = data.allMarkdownRemark.edges.filter(
    ({ node }) => node.frontmatter.tag === "web"
  )

  const printItems = data.allMarkdownRemark.edges.filter(
    ({ node }) => node.frontmatter.tag === "print"
  )

  return (
    <animated.nav className="nav-container" style={animation}>
      <div className="nav-section">
        <p className="nav-title">Web/Apps</p>
        <ul>
          {webItems.map(({ node }) => (
            <Link
              to={node.fields.slug}
              key={node.id}
              onClick={() => closeNav()}
            >
              <li className="thumbnail">
                <Img
                  sizes={node.frontmatter.thumbnailimage.childImageSharp.sizes}
                />
              </li>
            </Link>
          ))}
        </ul>
        <p className="nav-title">Print/Branding</p>
        <ul>
          {printItems.map(({ node }) => (
            <Link
              to={node.fields.slug}
              key={node.id}
              onClick={() => closeNav()}
            >
              <li className="thumbnail">
                <Img
                  sizes={node.frontmatter.thumbnailimage.childImageSharp.sizes}
                />
              </li>
            </Link>
          ))}
        </ul>
      </div>
    </animated.nav>
  )
}

SideBar.propTypes = {
  showMenu: PropTypes.bool,
}

SideBar.defaultProps = {
  showMenu: false,
}

export default SideBar
