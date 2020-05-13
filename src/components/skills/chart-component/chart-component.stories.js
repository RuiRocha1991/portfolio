import React from 'react';

import ChartComponent from './index'

export default { title: 'Chart Component' };

export const ChartComponentWithoutProps = () => <ChartComponent />

export const ChartComponentWithProps = () => <ChartComponent value={90} title='html' color='#DCA52E'/>
