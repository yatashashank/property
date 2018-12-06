import React from 'react';
import toJson from 'enzyme-to-json';

import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

import { shallow,render,mount } from 'enzyme';

import Main from '../../Components/Property/main'

import db from '../../dp.json'

describe('<Main />', () => {

  it('snapshot testing for Main component', () => {
    const wrapper = shallow(<Main />);
    expect(toJson(wrapper)).toMatchSnapshot()
  });

  it('class name check', () => {
    const wrapper = shallow(<Main />);
    const tree =wrapper.find('div.card')
    expect(tree.length).toBe(1)
  });

  it('state values ', () => {
    const wrapper = shallow(<Main />);
    const tree =wrapper.state().property;
    expect(tree.length).toBe(db.length)
  });

}) 