import React from "react"
import SEO from "../components/seo"
import HomeNav from "../components/homenav"
import SiteFooter from "../components/sitefooter"

const IndexPage = () => (
  <>
    <SEO title="Home" />
    <div className="home-top">
      <div className="home-text">
        <h1>Hi, I’m Ken.</h1>
        <p>
          I’m a graphic and web designer who also enjoys coding (mainly so i can
          build the things that I design.)
        </p>
        <p>
          I have a special place in my heart for web and app development. Seeing
          people use and interact with things I have built is beyond awesome.
        </p>
      </div>
    </div>

    <div className="home-nav-section">
      <div className="triangle" />
      <p className="latest-work-title">Below is some of my recent work.</p>
      <div className="home-content-container">
        <HomeNav />
      </div>
      <SiteFooter />
    </div>
  </>
)

export default IndexPage
