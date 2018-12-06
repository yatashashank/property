import React from 'react';
import toJson from 'enzyme-to-json';

import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

import { shallow,render,mount } from 'enzyme';

import Header from '../../Components/Header/Header'
import MenuIcon from "@material-ui/icons/Menu"
import TextField from '@material-ui/core/TextField';


describe('<Header />', () => {

  it('snapshot testing for Header component', () => {
    const wrapper = shallow(<Header />);
    expect(toJson(wrapper)).toMatchSnapshot()
  });

  it('state value for header component',()=>{
    const wrap=mount(<Header show={true}/>);
    const val=wrap.state()
    expect(val.searchTerm).toEqual("")
})

  it('checking incoming props',()=>{
    const wrap=mount(<Header show={true}/>);
    const val=wrap.props()
   // console.log('props value ',val)
    expect(val).toBeTruthy()
  })

  it('material ui component',()=>{
    const wrap=shallow(<Header/>);
    const val=wrap.find(MenuIcon)
    expect(val.length).toBe(1)
  })

  it('onclick function simulation',()=>{
    const wrap=shallow(<Header />);
    const val=wrap.find(MenuIcon);
    //val.simulate('click').find(wrap.prop().onclick);
  
  })

  
  it('class name check',()=>{
    const wrap=shallow(<Header />);
    const val=wrap.find('div.header');
    expect(val.hasClass('header')).toBeTruthy()
  })

  it('text field value check',()=>{
    const wrap=mount(<Header />);
    const val=wrap.find(TextField);
    expect(val.length).toBe(1)
  })


})