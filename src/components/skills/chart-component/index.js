import React from 'react'
import PropTypes from 'prop-types'
import {PieChart} from 'react-minimal-pie-chart'

import './chart-component.css'

const ChartComponent = ({value, title, color}) => {
  return (
    <div className='pie-chart-container'>
      <div className="pie-chart">
      <span className='pie-chart-value'>{value}%</span>
        <PieChart 
          data={[
            { title, value , color }
          ]}
          lineWidth={5}
          startAngle={-90}
          totalValue={100}
          animate={true}
        />
      </div>
        <h2 className='pie-chart-title'>{title}</h2>
    </div>
  )
}

ChartComponent.defaultProps = {
  value: 0,
  title: 'N/A',
  color: 'red'
}

ChartComponent.protoTypes = {
  value: PropTypes.number,
  title: PropTypes.string,
  color: PropTypes.string,
}

export default ChartComponent