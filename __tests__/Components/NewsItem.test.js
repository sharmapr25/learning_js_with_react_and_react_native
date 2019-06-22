import {shallow} from "enzyme";
import React from "react";
import NewsItem from "../../src/Components/NewsItem";

describe("news item", () => {
  let wrapper;

  beforeEach(() => {
    const item = {"title": "testTitle", "description": "It is a test", "category": "test"};
    wrapper = shallow(<NewsItem news={item}/>);
  });

  it("news title should be equal to testTitle", () => {
    const titleItem = wrapper.find({testID: "title"});
    expect(titleItem.props().children).toEqual("testTitle");
  });

  it("news description should be equal to It is a test", () => {
    const descriptionItem = wrapper.find({testID: "description"});
    expect(descriptionItem.props().children).toEqual("It is a test");
  });

  it("news category should be equal to test", () => {
    const categoryItem = wrapper.find({testID: "category"});
    expect(categoryItem.props().children).toEqual("test");
  });

});