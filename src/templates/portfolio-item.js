import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import Skill from "../components/skill"
import SEO from "../components/seo"

export default ({ data }) => {
  const post = data.markdownRemark
  return (
    <>
      <SEO title={post.frontmatter.title} />

      <div style={{ background: post.frontmatter.backgroundcolor }}>
        <div className="featured-image-container">
          <Img sizes={post.frontmatter.featuredimage.childImageSharp.sizes} />
        </div>
      </div>

      <div className="portfolio-info-container">
        <div className="portfolio-title-container">
          <h1 className="portfolio-title">{post.frontmatter.title}</h1>
        </div>

        <div className="title-and-info">
          <p className="portfolio-desc">{post.frontmatter.desc}</p>
        </div>
        <div className="meta-container">
          <ul className="meta-list">
            <>
              {post.frontmatter.skills.map(skill => (
                <Skill key={skill.name} skill={skill} />
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
              {post.frontmatter.sourcecode !== "" && (
                <li>
                  <a
                    href={post.frontmatter.sourcecode}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Source on GitHub
                  </a>
                </li>
              )}
            </>
          </ul>
        </div>
      </div>

      <div className="markdown">
        <div dangerouslySetInnerHTML={{ __html: post.html }} />
      </div>

      <footer>
        <p>
          Built with Gatsby{" "}
          <span className="footer-source">Source on GitHub</span>
        </p>
      </footer>
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
        sourcecode
        desc
        backgroundcolor
        skills {
          type
          name
        }
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
