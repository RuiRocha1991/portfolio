import React from 'react'
import PropTypes from 'prop-types'

import ChartComponent from './chart-component'

import { Container, Row, Col } from 'react-bootstrap'

const Skills = ({skills, color }) => {
  return (
  <Container fluid={true}>
    <Row xs="1" sm="2" md="3" lg="4" xl="5">
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