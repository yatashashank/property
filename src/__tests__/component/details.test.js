import React from 'react';
import toJson from 'enzyme-to-json';

import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

import { shallow,render,mount } from 'enzyme';

import Details from '../../Components/Property/details'


describe('<Details />', () => {
//console.log('details  ',Details)
    let wrapper;
    beforeEach(() => {
      wrapper = shallow(<Details />);
    })

  it('snapshot testing for Details component', () => {
    //wrapper = shallow(<Details />);
    let wrap=wrapper.first().shallow()
    expect(toJson(wrap)).toMatchSnapshot()
  });

  it('root class name check', () => {
    //const wrapper = shallow(<Details />);
    const tree=wrapper.state();
    console.log('tree ',)
    //expect(tree.length).toBe(1)
  });
})