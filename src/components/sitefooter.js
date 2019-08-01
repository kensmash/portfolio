import React from "react"

const SiteFooter = () => {
  return (
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
        <span className="footer-source">
          <a href="mailto:ken@kenfrederick.com">ken@kenfrederick.com</a>
        </span>
      </p>
    </footer>
  )
}

export default SiteFooter
