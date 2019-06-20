import {configure, shallow} from "enzyme";
import React from 'react';
import Profile from '../src/Containers/Profile';

describe('Profile', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Profile />);
  });

  it('should match contain of text element', () => {
    const textWrapper = wrapper.find('Text');
    expect(textWrapper.props().children).toEqual('Saya nama preeti');
  });

  it('should match contain of text element', () => {
    const imageWrapper = wrapper.find('Image');
    const pic = {url: "https://cdn.pixabay.com/photo/2018/05/28/22/11/message-in-a-bottle-3437294__340.jpg"};
    expect(imageWrapper.props().source).toEqual(pic);
  });

});

