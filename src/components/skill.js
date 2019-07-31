import React from "react"
import PropTypes from "prop-types"
import {
  FaCode,
  FaReact,
  FaVuejs,
  FaPen,
  FaPaintBrush,
  FaWordpressSimple,
  FaNodeJs,
  FaCircle,
} from "react-icons/fa"

const Skill = ({ skill }) => {
  let skillIcon
  switch (skill.type) {
    case "ux":
      skillIcon = <FaPaintBrush />
      break
    case "code":
      skillIcon = <FaCode />
      break
    case "node":
      skillIcon = <FaNodeJs />
      break
    case "wordpress":
      skillIcon = <FaWordpressSimple />
      break
    case "vue":
      skillIcon = <FaVuejs />
      break
    case "react":
      skillIcon = <FaReact />
      break
    case "logo":
      skillIcon = <FaPen />
      break
    default:
      skillIcon = <FaCircle />
  }
  return (
    <li>
      {skillIcon}
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
