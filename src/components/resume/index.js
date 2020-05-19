import React from 'react'
import PropTypes from 'prop-types'

import { Container, Row, Col } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCogs } from '@fortawesome/free-solid-svg-icons'

import ResumeItem from './resume-item/'
import './resume.css'

const Resume = ({resumeList}) => {
  return (
    <Container className='resume-container'>
      <Row>
        <Col className='resume-container-title'><h2>My Resume <span><FontAwesomeIcon icon={faCogs} className="skills-icon"/></span></h2></Col>
      </Row>
      <Row lg="1">
          {resumeList.sort((a,b) => a.endDate - b.endDate).map((item, index) => (
            <ResumeItem key={index} {...item}/>
          ))}
      </Row>
    </Container>
  )
}

Resume.defaultProps = {
  resumeList: [],
}

Resume.protoTypes = {
  resumeList: PropTypes.array.isRequired,
}

export default Resume
