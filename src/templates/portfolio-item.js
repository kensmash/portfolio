import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import Skill from "../components/skill"
import SEO from "../components/seo"

export default ({ data }) => {
  const post = data.markdownRemark
  return (
    <>
      <SEO title="Something" />

      <div style={{ background: post.frontmatter.backgroundcolor }}>
        <div className="featured-image-container">
          <Img sizes={post.frontmatter.featuredimage.childImageSharp.sizes} />
        </div>
      </div>

      <div className="portfolio-title-container">
        <div className="title-and-info">
          <h1 className="portfolio-title">{post.frontmatter.title}</h1>
          <p>{post.frontmatter.desc}</p>
        </div>
        <div className="meta-container">
          <div className="meta-list">
            <ul>
              <>
                {post.frontmatter.skills.map(skill => (
                  <Skill skill={skill} />
                ))}
                {post.frontmatter.url !== "" && (
                  <li>
                    <a
                      href={post.frontmatter.url}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Visit site
                    </a>
                  </li>
                )}
              </>
            </ul>
          </div>
        </div>
      </div>

      <div className="markdown">
        <div dangerouslySetInnerHTML={{ __html: post.html }} />
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
        url
        desc
        backgroundcolor
        skills
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
