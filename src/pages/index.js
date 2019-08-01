import React, { useState } from "react"
import SEO from "../components/seo"
import { Waypoint } from "react-waypoint"
import { animated, useSpring, config } from "react-spring"
import HomeNav from "../components/homenav"
import SiteFooter from "../components/sitefooter"

const IndexPage = () => {
  const [on, toggle] = useState(false)
  const animation = useSpring({
    opacity: on ? 1 : 0,
    transform: on ? "translate3d(0,0,0)" : "translate3d(0, 50%, 0)",
    config: config.slow,
  })
  return (
    <>
      <SEO title="Home" />
      <div className="home-top">
        <div className="home-text">
          <h1>Hi, I’m Ken.</h1>

          <p>
            I’m a graphic and web designer who also enjoys coding (mainly so i
            can build the things that I design.)
          </p>
          <p>
            I have a special place in my heart for web and app development.
            Seeing people use and interact with things I have built is beyond
            awesome.
          </p>
        </div>
      </div>
      <Waypoint
        bottomOffset="35%"
        onEnter={() => {
          if (!on) toggle(true)
        }}
      />
      <animated.div className="home-nav-section" style={animation}>
        <div className="triangle" />
        <p className="latest-work-title">Below is some of my recent work.</p>
        <div className="home-content-container">
          <HomeNav />
        </div>
        <SiteFooter />
      </animated.div>
    </>
  )
}

export default IndexPage
