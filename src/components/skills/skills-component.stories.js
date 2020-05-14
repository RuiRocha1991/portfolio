import { addParameters, storiesOf } from '@storybook/react'
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';

import React from 'react';

import Skill from './index'

import 'normalize.css'
import 'bootstrap/dist/css/bootstrap.min.css'

const array = [
  {value: 90, title: 'html'}, 
  {value: 80, title: 'css'}, 
  {value: 50, title: 'java'},
  {value: 88, title: 'jquery'},
  {value: 74, title: 'Jira'}
]

const array2 = [
  {value: 90, title: 'html'}, 
  {value: 80, title: 'css'}, 
  {value: 50, title: 'java'},
  {value: 88, title: 'jquery'},
  {value: 74, title: 'Jira' }
]

const array3 = [
  {value: 90}, 
  {value: 80}, 
  {value: 50},
  {value: 88},
  {value: 74}
]

const array4 = [
  {title: 'html'}, 
  { title: 'css'}, 
  { title: 'java'},
  { title: 'jquery'},
  { title: 'Jira' }
]
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

storiesOf('Skills', module)
  .add('skill with all props', () => <Skill skills={array} color='#DCA52E'/>)
  .add('skill without prop color', () => <Skill skills={array2} />)
  .add('Skills without prop title', () => <Skill skills={array3} color='#DCA52E'/>)
  .add('Skills without prop value', () => <Skill skills={array4} color='#DCA52E'/>)
  .add('Skills without props', () => <Skill skills={[{}]}/>)
