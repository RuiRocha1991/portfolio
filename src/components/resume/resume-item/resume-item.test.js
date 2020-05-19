import React from 'react'
import {configure,  shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16';
import renderer from 'react-test-renderer'

configure({ adapter: new Adapter() });

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGraduationCap, faSuitcase } from '@fortawesome/free-solid-svg-icons'

import ResumeItem from '.'

it('Should ResumeItem with all props and isGraduation=true to match snapshot',() => {
  const tree = renderer.create(
    <ResumeItem
      title={"Computer Science"}
      startDate={2007}
      endDate={2011}
      affiliations={"Harvard University"}
      resume={"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusm tempor incididunt ut labore et dolore magna aliqua Lorem ipsum dolor sit amet, consectetur adipisicing elit."}
      isGraduation={true}
    />
  ).toJSON()
  expect(tree).toMatchSnapshot()
})

it('Should ResumeItem with all props and isGraduation=true contains icon "faGraduationCap"',() => {
  const wrapper = shallow(<ResumeItem
    title={"Computer Science"}
    startDate={2007}
    endDate={2011}
    affiliations={"Harvard University"}
    resume={"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusm tempor incididunt ut labore et dolore magna aliqua Lorem ipsum dolor sit amet, consectetur adipisicing elit."}
    isGraduation={true}
  />)
  const icon = <FontAwesomeIcon className="resume-item-icon" icon={faGraduationCap}/>
  expect(wrapper.contains(icon)).toEqual(true);
})

it('Should ResumeItem with all props and isGraduation=false to match snapshot',() => {
  const tree = renderer.create(
    <ResumeItem
      title={"Computer Science"}
      startDate={2007}
      endDate={2011}
      affiliations={"Harvard University"}
      resume={"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusm tempor incididunt ut labore et dolore magna aliqua Lorem ipsum dolor sit amet, consectetur adipisicing elit."}
      isGraduation={false}
    />
  ).toJSON()
  expect(tree).toMatchSnapshot()
})

it('Should ResumeItem with all props and isGraduation=false contains icon "faSuitcase"',() => {
  const wrapper = shallow(<ResumeItem
    title={"Computer Science"}
    startDate={2007}
    endDate={2011}
    affiliations={"Harvard University"}
    resume={"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusm tempor incididunt ut labore et dolore magna aliqua Lorem ipsum dolor sit amet, consectetur adipisicing elit."}
    isGraduation={false}
  />)
  const icon = <FontAwesomeIcon className="resume-item-icon" icon={faSuitcase}/>
  expect(wrapper.contains(icon)).toEqual(true);
})

it('Should ResumeItem without props to match snapshot',() => {
  const tree = renderer.create(
    <ResumeItem/>
  ).toJSON()
  expect(tree).toMatchSnapshot()
})


it('Should ResumeItem validate title',() => {
  const wrapper = shallow(<ResumeItem
    title={"Computer Science"}
    startDate={2007}
    endDate={2011}
    affiliations={"Harvard University"}
    resume={"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusm tempor incididunt ut labore et dolore magna aliqua Lorem ipsum dolor sit amet, consectetur adipisicing elit."}
    isGraduation={false}
  />)
  const title =  <h4>Computer Science</h4>
  expect(wrapper.contains(title)).toEqual(true);
})
