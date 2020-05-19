import React from 'react'
import PropTypes from 'prop-types'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGraduationCap, faSuitcase } from '@fortawesome/free-solid-svg-icons'

import './resume-item.css'

const ResumeItem = ({title, startDate, endDate, affiliations, resume, isGraduation}) => {
  const className = isGraduation ? "resume-item-icon-container-graduation" : "resume-item-icon-container-experience"
  return (
    <div className="resume-item-container">
      <div className="resume-item">
        <div className={className}>
          {isGraduation ? <FontAwesomeIcon className="resume-item-icon" icon={faGraduationCap}/> :
          <FontAwesomeIcon className="resume-item-icon" icon={faSuitcase}/> }
        </div>
        <div className="resume-date">{startDate} - {endDate}</div>
        <h4>{title}</h4>
        <span>{affiliations}</span>
        <p>{resume}</p>
      </div>
    </div>
  )
}

ResumeItem.defaultProps = {
  title: 'N/A',
  startDate: 0,
  endDate: 0,
  affiliations: 'N/A',
  resume: 'N/A',
  isGraduation: false,
}

ResumeItem.propTypes = {
  title: PropTypes.string.isRequired,
  startDate: PropTypes.number.isRequired,
  endDate: PropTypes.number.isRequired,
  affiliations: PropTypes.string.isRequired,
  resume: PropTypes.string.isRequired,
  isGraduation: PropTypes.bool.isRequired,
}

export default ResumeItem