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

  const recentItems = data.allMarkdownRemark.edges.slice(0, 5)

  return (
    <nav className="home-nav-container">
      <div className="home-nav-section">
        <ul>
          {recentItems.map(({ node }) => (
            <Link to={node.fields.slug} key={node.id}>
              <li className="thumbnail home-thumbnail">
                <Img
                  sizes={node.frontmatter.homepagethumb.childImageSharp.sizes}
                />
                {node.frontmatter.title}
              </li>
            </Link>
          ))}
        </ul>
      </div>
    </nav>
  )
}

export default HomeNav
