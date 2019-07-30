import React from "react"
import Img from "gatsby-image"
import { graphql, useStaticQuery, Link } from "gatsby"

const HomeNav = () => {
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
    <nav className="home-nav-container">
      <div className="home-nav-section">
        <p className="nav-title">Web/Apps</p>
        <ul>
          {webItems.map(({ node }) => (
            <Link to={node.fields.slug} key={node.id}>
              <li className="thumbnail home-thumbnail">
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
            <Link to={node.fields.slug} key={node.id}>
              <li className="thumbnail home-thumbnail">
                <Img
                  sizes={node.frontmatter.thumbnailimage.childImageSharp.sizes}
                />
              </li>
            </Link>
          ))}
        </ul>
      </div>
    </nav>
  )
}

export default HomeNav
