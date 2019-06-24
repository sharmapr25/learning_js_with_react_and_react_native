import { shallow } from 'enzyme';
import 'react-native';
import React from 'react';

import App from '../App';


describe('App', () => {
  describe('#render', () => {
    it('should render NewsWithCategoryMenu component', () => {
      const wrapper = shallow(<App/>);

      const textWrapper = wrapper.find('NewsWithCategoryMenu');

      expect(textWrapper).toHaveLength(1);
    });
  });
});
