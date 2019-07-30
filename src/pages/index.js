import React from "react"
import HomeNav from "../components/homenav"
import SEO from "../components/seo"

const IndexPage = () => (
  <>
    <SEO title="Home" />
    <div className="home-content">
      <div>
        <h1>Hi, I’m Ken.</h1>
        <p>Something, something. dark side.</p>
      </div>
      <HomeNav />
    </div>
  </>
)

export default IndexPage
