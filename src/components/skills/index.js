import React from 'react'
import PropTypes from 'prop-types'

import ChartComponent from './chart-component'

const Skills = ({skills = {}}) => {
  return (<div>
    {skills.map((skill, index) => (
      <ChartComponent key={index} {...skill} />
    ))}
  </div>)
}

Skills.defaultProps = {
  skills: {color: '#DCA52E'}
}

Skills.protoTypes = {
 skills: PropTypes.array.isRequired
}

export default Skills