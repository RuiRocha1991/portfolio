import { addParameters, storiesOf } from '@storybook/react'
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';

import React from 'react';

import Resume from './index'

import 'normalize.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import '../../App.css'

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


const array = [{
  title: "Computer Science",
  startDate: "2007",
  endDate: "2011",
  affiliations: "Harvard University",
  resume: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusm tempor incididunt ut labore et dolore magna aliqua Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
  isGraduation:true
},
{
  title: "Full-stack developer",
  startDate: "2011",
  endDate: "2014",
  affiliations: "Freelancer",
  resume: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusm tempor incididunt ut labore et dolore magna aliqua Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
  isGraduation:false
},{
  title: "Full-stack developer",
  startDate: "2010",
  endDate: "2013",
  affiliations: "Freelancer",
  resume: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusm tempor incididunt ut labore et dolore magna aliqua Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
  isGraduation:false
}
]

storiesOf('Resume', module)
  .add('skill with all props', () => <Resume resumeList={array}/>)