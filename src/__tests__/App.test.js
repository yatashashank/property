import React from 'react';
import toJson from 'enzyme-to-json';

import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

import { shallow,render,mount } from 'enzyme';

import App from '../App'
import {Switch,Route,BrowserRouter} from 'react-router-dom'

describe('<App />', () => {

  it('snapshot testing for App component', () => {
    const wrapper = shallow(<App />);
    expect(toJson(wrapper)).toMatchSnapshot()
  });

  it('checking classname for App component ',()=>{
    const wrap=shallow(<App />);
    const tree=wrap.find('.app')
    expect(tree).toHaveLength(1)
  });

  it('class name for main content', () => { 
    const wrap=shallow(<App />);
    const tree=wrap.find('div.content') 
    expect(tree.hasClass('content')).toBeTruthy()
  })

  it('checking total routes and single routes', () => { 
    const wrap=shallow(<App />);
    const tree=wrap.find(Route)
    const tree1=wrap.find(Route).find({path: '/details/:id'}) 
    expect(tree.length).toBe(2)
    expect(tree1.length).toBe(1)
  })


})