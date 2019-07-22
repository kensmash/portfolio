import React from "react"
import PropTypes from "prop-types"
import Image from "./image"
import Img from "gatsby-image"
import { graphql, useStaticQuery, Link } from "gatsby"
import { BrowserView, MobileView } from "react-device-detect"

const SideBar = ({ siteTitle }) => {
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

  const wordpressItems = data.allMarkdownRemark.edges.filter(
    ({ node }) => node.frontmatter.tag === "WordPress"
  )

  return (
    <nav className="nav-container">
      <div className="me">
        <div className="portrait-container">
          <Image />
        </div>
        <div>
          <Link to="/">
            <p className="title">Ken Frederick</p>
          </Link>
          <p className="title-desc">Designer/Developer</p>
        </div>
      </div>

      <BrowserView>
        <div className="nav-section">
          <p className="nav-title">WordPress</p>
          <ul>
            {wordpressItems.map(({ node }) => (
              <Link to={node.fields.slug} key={node.id}>
                <li>
                  <Img
                    sizes={
                      node.frontmatter.thumbnailimage.childImageSharp.sizes
                    }
                  />
                </li>
              </Link>
            ))}
          </ul>
        </div>
      </BrowserView>
      <MobileView>
        <ul>
          {data.allMarkdownRemark.edges.map(({ node }) => (
            <Link to={node.fields.slug} key={node.id}>
              <li>
                <Img
                  sizes={node.frontmatter.thumbnailimage.childImageSharp.sizes}
                />
              </li>
            </Link>
          ))}
        </ul>
      </MobileView>
    </nav>
  )
}

SideBar.propTypes = {
  siteTitle: PropTypes.string,
}

SideBar.defaultProps = {
  siteTitle: ``,
}

export default SideBar
