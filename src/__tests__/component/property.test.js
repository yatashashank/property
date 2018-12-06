import React from 'react';
import toJson from 'enzyme-to-json';

import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

import { shallow,render,mount } from 'enzyme';

import Property from '../../Components/Property/property'
import Card from '@material-ui/core/Card';

import db from '../../dp.json'

describe('<Property />', () => {

  it('snapshot testing for Property component', () => {
    const wrapper = shallow(<Property />);
    expect(toJson(wrapper)).toMatchSnapshot()
  });

  it('root class name check', () => {
    const wrapper = shallow(<Property />);
    const tree=wrapper.state();
    //console.log('tree ',tree)
    //expect(tree.length).toBe(1)
  });
})