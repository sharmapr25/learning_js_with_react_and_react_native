/**
 * @format
 */

import { shallow } from 'enzyme/build'
import 'react-native'
import React from 'react'
import App from '../App'

// Note: test renderer must be required after react-native.

it('renders correctly', () => {
  const wrapper = shallow(<App />);
  const textElement = wrapper.find('Text');
  expect(textElement.props().children).toEqual('Hello world');

});
