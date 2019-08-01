import React from "react"
import Img from "gatsby-image"
import { graphql, useStaticQuery, Link } from "gatsby"

const HomeNav = () => {
  const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
        totalCount
        edges {
          node {
            id
            frontmatter {
              title
              tag
              showonhomepage
              homepagethumb {
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

  const recentItems = data.allMarkdownRemark.edges
    .filter(item => item.node.frontmatter.showonhomepage)
    .slice(0, 6)

  return (
    <nav className="home-nav-container">
      <ul>
        {recentItems.map(({ node }) => (
          <li className="home-thumbnail-container" key={node.id}>
            <div className="home-thumbnail">
              <Link to={node.fields.slug}>
                <Img
                  sizes={node.frontmatter.homepagethumb.childImageSharp.sizes}
                />
              </Link>
            </div>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default HomeNav
