import React from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faIdCard, faGraduationCap } from '@fortawesome/free-solid-svg-icons'


import './menu.css'

const Menu = () => {

  return (
    <div className="slide-menu">
            <div className="logo">
              {/* eslint-disable-next-line jsx-a11y/anchor-is-valid*/}
                <a className="logo-brand" href="#">Portfolio</a>
            </div>
            <div className="menu-list">
                <ul className="menu-links list-unstyled">
                    <li>
                        {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                        <a className="" href="#home">Home<span><FontAwesomeIcon icon={faHome}/></span></a>
                    </li>
                    <li>
                      {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                        <a href="#about" className="active">About<span><FontAwesomeIcon icon={faIdCard}/></span></a>
                    </li>
                    <li>
                      {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                        <a href="#resume" className="">Resume<span><FontAwesomeIcon icon={faGraduationCap}/></span></a>
                    </li>
                </ul>
            </div>
            <ul className="social-media list-unstyled">
              {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                <li><a href="#"><i className="fa fa-facebook"></i></a></li>
                {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                <li><a href="#"><i className="fa fa-twitter"></i></a></li>
                {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                <li><a href="#"><i className="fa fa-behance"></i></a></li>
                {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                <li><a href="#"><i className="fa fa-instagram"></i></a></li>
                {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                <li><a href="#"><i className="fa fa-linkedin"></i></a></li>
            </ul>
        </div>
  )
}

export default Menu