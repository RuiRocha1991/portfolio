import React from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import './item.css'

const ItemMenu = ({href, isActive, itemName, icon}) => {
  return (    
    <li>
        <a href={`#${href}`} className={isActive ? isActive : ''} >{itemName}<span><FontAwesomeIcon icon={icon}/></span></a>
    </li>
  )
}

ItemMenu.propTypes = {
  href: PropTypes.string.isRequired,
  isActive: PropTypes.bool,
  itemName: PropTypes.string.isRequired,
  icon:PropTypes.func.isRequired,
}

export default ItemMenu