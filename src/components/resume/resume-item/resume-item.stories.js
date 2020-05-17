import { addParameters, storiesOf } from '@storybook/react'
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';

import React from 'react';

import ResumeItem from './index'

import 'normalize.css'
import 'bootstrap/dist/css/bootstrap.min.css'



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



storiesOf('Resume item', module)
  .add('skill with all props', () => <div style={{'margin': '30px'}}> 
    <ResumeItem 
      title={"Computer Science"}
      startDate={"2007"}
      endDate={"2011"}
      affiliations={"Harvard University"}
      resume={"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusm tempor incididunt ut labore et dolore magna aliqua Lorem ipsum dolor sit amet, consectetur adipisicing elit."}
      isGraduation={true}
      />
    </div>
    )
