import React from 'react'
import PropTypes from 'prop-types'

import ChartComponent from './chart-component'

import { Container, Row, Col } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCogs } from '@fortawesome/free-solid-svg-icons'

import './skills.css'

const Skills = ({skills, color }) => {
  return (
  <Container className='skills-container'>
    <Row>
      <Col className='skills-container-title'><h2>My Skills <span><FontAwesomeIcon icon={faCogs} className="skills-icon"/></span></h2></Col>
    </Row>
    <Row xs="1" sm="2" md="3" lg="4">
        {skills.map((skill, index) => (
          <Col>
            <ChartComponent key={index} {...skill} color={color} />
          </Col>
        ))}
    </Row>
  </Container>)
}

Skills.defaultProps = {
  skills: [],
}

Skills.protoTypes = {
 skills: PropTypes.array.isRequired,
}

export default Skills