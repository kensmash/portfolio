import React from "react"
import PropTypes from "prop-types"

const Skill = ({ skill }) => <li>{skill}</li>

Skill.propTypes = {
  siteTitle: PropTypes.string,
  siteDescription: PropTypes.string,
  openNav: PropTypes.func,
}

Skill.defaultProps = {
  siteTitle: ``,
  siteDescription: ``,
}

export default Skill
