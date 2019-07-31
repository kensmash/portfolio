import React from "react"
import SEO from "../components/seo"
import HomeNav from "../components/homenav"
import Footer from "../components/footer"

const IndexPage = () => (
  <>
    <SEO title="Home" />
    <div className="home-top">
      <div className="home-content-container home-text">
        <h1>Hi, I’m Ken.</h1>
        <p>
          I’m a graphic and web designer who also enjoys coding (mainly so i can
          build the things that I design.)
        </p>
        <p>
          I have a special place in my heart for web and app development. Seeing
          people use and interact with things I have built is beyond awesome.
        </p>
        <p>You can contact me here.</p>
      </div>
    </div>

    <div className="home-nav-section">
      <div className="home-content-container">
        <div className="triangle"></div>
        <HomeNav />
      </div>
    </div>
    <Footer />
  </>
)

export default IndexPage
