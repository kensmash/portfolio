import React from "react"
import PropTypes from "prop-types"
import { FaBeer } from "react-icons/fa"

const Skill = ({ skill }) => {
  return (
    <li>
      <FaBeer />
      <span className="skill-name">{skill.name}</span>
    </li>
  )
}

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
