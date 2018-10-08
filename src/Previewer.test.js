import React, {Component} from 'react';
import Previewer from './Previewer';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {shallow} from 'enzyme';
import toJson from 'enzyme-to-json';
import { ENETRESET } from 'constants';
 
Enzyme.configure({ adapter: new Adapter() });

test("Previewer should render correctly with data", () => {
    const value = {
        value: '# Welcome to the Markdown Previewer\n\n## The title was a header, this is a sub-header\n\n### **Ussage:**\n\n * Write markdown text in this textarea.\n * See the changes in the previewer\n\n### **Text attributes in number list:**\n\n1. *italic*,\n2. **bold**,\n3. **_italic-bold_**\n4. `monospace`\n5. ~~strikethrough~~ \n\n*[Checkout my gitHub for more projects](https://github.com/Lorenatacal)*'
    }
    const wrapper = Enzyme.shallow(<Previewer source={value} />)
    expect(toJson(wrapper)).toMatchSnapshot();
})