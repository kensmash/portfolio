import React, { useState } from "react"
import { graphql } from "gatsby"
import { Waypoint } from "react-waypoint"
import { animated, useSpring, config } from "react-spring"
import Img from "gatsby-image"
import { FaLink, FaGithub } from "react-icons/fa"
import Skill from "../components/skill"
import SiteFooter from "../components/sitefooter"
import SEO from "../components/seo"

export default ({ data }) => {
  const [on, toggle] = useState(false)
  const [mdOn, mdToggle] = useState(false)
  const animation = useSpring({
    opacity: on ? 1 : 0,
    transform: on ? "translate3d(0,0,0)" : "translate3d(0, 50%, 0)",
    config: config.slow,
  })
  const markDownAnimation = useSpring({
    opacity: mdOn ? 1 : 0,
    transform: mdOn ? "translate3d(0,0,0)" : "translate3d(0, 50%, 0)",
    config: config.molasses,
  })
  const post = data.markdownRemark

  return (
    <>
      <SEO title={post.frontmatter.title} />

      <div
        className="content-container featured-image-background"
        style={{
          backgroundImage: `radial-gradient(
      ${post.frontmatter.backgroundcolorlight},
      ${post.frontmatter.backgroundcolordark}
    )`,
        }}
      >
        <div className="featured-image-container">
          <Img sizes={post.frontmatter.featuredimage.childImageSharp.sizes} />
        </div>
      </div>
      <div style={{ background: "white" }}>
        <Waypoint
          bottomOffset="35%"
          onEnter={() => {
            if (!on) toggle(true)
          }}
        />

        <animated.div className="portfolio-info-container" style={animation}>
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
                      <FaLink />
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
                      <FaGithub />
                      <span className="skill-name">Source on GitHub</span>
                    </a>
                  </li>
                )}
              </>
            </ul>
          </div>
        </animated.div>
        <Waypoint
          bottomOffset="15%"
          onEnter={() => {
            if (!mdOn) mdToggle(true)
          }}
        />
        <animated.div className="markdown" style={markDownAnimation}>
          <div
            className="markdown-content"
            dangerouslySetInnerHTML={{ __html: post.html }}
          />
        </animated.div>

        <SiteFooter />
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
        sourcecode
        desc
        backgroundcolorlight
        backgroundcolordark
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
