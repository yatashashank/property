import React from 'react';
import toJson from 'enzyme-to-json';

import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

import { shallow,render,mount } from 'enzyme';

import Menu from '../../Components/Menu/Menu'

describe('<Menu />', () => {

  it('snapshot testing for Menu component', () => {
    const wrapper = shallow(<Menu />);
    expect(toJson(wrapper)).toMatchSnapshot()
  });

  it('checking class name', () => {
    const wrapper = shallow(<Menu />);
    const tree=wrapper.find('.menu')
    expect(tree.length).toBe(1)
  });

  it('checking incoming props',()=>{
      const wrap=mount(<Menu show={true}/>);
      const val=wrap.props().show
      expect(val).toBeTruthy()
  })

})