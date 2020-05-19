import React from 'react'
import renderer from 'react-test-renderer'

import Resume from '.'

const array = [{
  title: "Computer Science",
  startDate: 2007,
  endDate: 2011,
  affiliations: "Harvard University",
  resume: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusm tempor incididunt ut labore et dolore magna aliqua Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
  isGraduation:true
},
{
  title: "Full-stack developer",
  startDate: 2011,
  endDate: 2014,
  affiliations: "Freelancer",
  resume: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusm tempor incididunt ut labore et dolore magna aliqua Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
  isGraduation:false
},{
  title: "Full-stack developer",
  startDate: 2010,
  endDate: 2013,
  affiliations: "Freelancer",
  resume: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusm tempor incididunt ut labore et dolore magna aliqua Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
  isGraduation:false
}
]

it('Should Resume with all props',() => {
  const tree = renderer.create(
    <Resume resumeList={array}/>
  ).toJSON()
  expect(tree).toMatchSnapshot()
})

it('Should Resume without props',() => {
  const tree = renderer.create(
    <Resume />
  ).toJSON()
  expect(tree).toMatchSnapshot()
})
