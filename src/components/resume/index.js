import React from 'react'
import PropTypes from 'prop-types'

import ResumeItem from './resume-item'

const Resume = ({resumeList}) => {
  return (
    <div style={{'margin': '30px'}}>
        {resumeList.map((item, index) => (
          <ResumeItem key={index} {...item}/>
        ))}
    </div>
  )
}

Resume.defaultProps = {
  skills: [],
}

Resume.protoTypes = {
 skills: PropTypes.array.isRequired,
}

export default Resume