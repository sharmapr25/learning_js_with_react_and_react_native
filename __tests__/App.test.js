/**
 * @format
 */

import {configure, shallow} from "enzyme";
import 'react-native';
import React from 'react';
import App from '../App';


// Note: test renderer must be required after react-native.

it('renders correctly', () => {
  const wrapper = shallow(<App />);
  const textWrapper = wrapper.find('Text');
  expect(textWrapper.props().children).toEqual('Hello world');
});
