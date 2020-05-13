import React from 'react';

import Skill from './index'

export default { title: 'Skill' };

const array = [
  {value: 90, title: 'html', color: '#DCA52E'}, 
  {value: 80, title: 'css', color: '#DCA52E'}, 
  {value: 50, title: 'java', color: '#DCA52E'},
  {value: 88, title: 'jquery', color: '#DCA52E'},
  {value: 75, title: 'react', color: '#DCA52E'},
  {value: 67, title: 'typescript', color: '#DCA52E'},
  {value: 100, title: 'javascript', color: '#DCA52E'},
  {value: 30, title: 'node', color: '#DCA52E'}
]

export const skill = () => <Skill skills={array}/>

const array2 = [
  {value: 90, title: 'html'}, 
  {value: 80, title: 'css'}, 
  {value: 50, title: 'java'},
  {value: 88, title: 'jquery'},
  {value: 75, title: 'react'},
  {value: 67, title: 'typescript'},
  {value: 100, title: 'javascript'},
  {value: 30}
]
export const skillWithoutPropColor = () => <Skill skills={array2}/>