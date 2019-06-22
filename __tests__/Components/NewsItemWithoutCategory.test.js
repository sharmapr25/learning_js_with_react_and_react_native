import {shallow} from "enzyme";
import React from "react";
import NewsItemWithoutCategory from "../../src/Components/NewsItemWithoutCategory";

describe("news item without category", () => {
  let wrapper;

  beforeEach(() => {
    const item = {"title": "testTitle", "description": "It is a test"};
    wrapper = shallow(<NewsItemWithoutCategory news={item}/>);
  });

  it("news should have three text elements", () => {
    const textItem = wrapper.find("Text");
    expect(textItem).toHaveLength(2);
  });

  it("news title should be equal to testTitle", () => {
    const titleItem = wrapper.find({testID: "title"});
    expect(titleItem.props().children).toEqual("testTitle");
  });

  it("news description should be equal to It is a test", () => {
    const descriptionItem = wrapper.find({testID: "description"});
    expect(descriptionItem.props().children).toEqual("It is a test");
  });

});