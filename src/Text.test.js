import React, {Component} from 'react';
import Text from './Text';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {shallow} from 'enzyme';
import toJson from 'enzyme-to-json';
 
Enzyme.configure({ adapter: new Adapter() });

test("Text should render correctly", () => {
    const wrapper = Enzyme.shallow(<Text />)
    expect(toJson(wrapper)).toMatchSnapshot();
})