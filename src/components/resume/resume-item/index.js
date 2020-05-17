import React from 'react'

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

export default ResumeItem