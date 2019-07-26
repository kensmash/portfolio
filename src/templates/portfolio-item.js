import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import { FaBeer } from "react-icons/fa"
import Skill from "../components/skill"
import SEO from "../components/seo"

export default ({ data }) => {
  const post = data.markdownRemark
  return (
    <>
      <SEO title={post.frontmatter.title} />

      <div
        className="featured-image-background"
        style={{
          background: post.frontmatter.backgroundcolor,
        }}
      >
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
                    <FaBeer />
                    <span className="skill-name">Visit site</span>
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
                    <FaBeer />
                    <span className="skill-name">Source on GitHub</span>
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
          Built with{" "}
          <a
            href="https://www.gatsbyjs.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Gatsby
          </a>
          <span className="footer-source">
            Source on{" "}
            <a
              href="https://github.com/kensmash/portfolio"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
          </span>
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
