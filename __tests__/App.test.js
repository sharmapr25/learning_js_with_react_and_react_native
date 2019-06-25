/**
 * @format
 */

import {configure, shallow, mount} from "enzyme";
import 'react-native';
import React from 'react';
import App, {AppContainer} from '../App';



it('renders correctly', () => {
  const wrapper = shallow(<App />);
  console.log(wrapper.debug());
});
