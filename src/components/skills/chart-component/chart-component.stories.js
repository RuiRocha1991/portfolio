import { addParameters, storiesOf } from '@storybook/react'
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';

import React from 'react';

import ChartComponent from './index'

const customViewports = {
  desktopFullHD: {
    name: 'Desktop Full HD',
    styles: {
      width: '100%',
      height: '100%',
    },
  }
};
addParameters({
  viewport: {
    viewports: {...INITIAL_VIEWPORTS, ...customViewports}
  },
});


storiesOf('Chart', module)
  .add('Chart with all props', () => <ChartComponent value={90} title='html' color='#FFD700'/>)
  .add('Chart without prop color', () => <ChartComponent value={90} title='html'  />)
  .add('Chart without prop title', () => <ChartComponent value={90}  color='#FFD700'/>)
  .add('Chart without prop value', () => <ChartComponent title='html' color='#FFD700'/>)
  .add('Chart without props', () => <ChartComponent />)

