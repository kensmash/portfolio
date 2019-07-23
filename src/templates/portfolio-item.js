import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import SEO from "../components/seo"

export default ({ data }) => {
  const post = data.markdownRemark
  return (
    <>
      <SEO title="Something" />

      <div className="portfolio-title-container">
        <div className="title-and-meta">
          <h1 className="portfolio-title">Project: {post.frontmatter.title}</h1>
          <p>URL: url</p>
        </div>

        <div className="featured-image">
          <Img sizes={post.frontmatter.featuredimage.childImageSharp.sizes} />
        </div>
      </div>

      <div className="portfolio-content-container">
        <div className="portfolio-text">
          <div dangerouslySetInnerHTML={{ __html: post.html }} />
        </div>
      </div>
    </>
  )
}

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        featuredimage {
          childImageSharp {
            sizes(quality: 95, maxWidth: 1000) {
              ...GatsbyImageSharpSizes
            }
          }
        }
      }
    }
  }
`
