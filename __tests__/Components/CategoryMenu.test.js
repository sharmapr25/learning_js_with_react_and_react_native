import {shallow} from "enzyme";
import React from "react";
import CategoryMenu from "../../src/Components/CategoryMenu";

describe('Category menu', () => {

  it("should render three text when three categories exists", () => {
    const categories = ["entertainment" , "sports", "music"];
    const wrapper = shallow(<CategoryMenu categories={categories}/>);

    const categoriesItem = wrapper.find("Text");

    expect(categoriesItem).toHaveLength(3);
  });

  it("should render one text when one categories exists", () => {
    const categories = ["entertainment"];
    const wrapper = shallow(<CategoryMenu categories={categories}/>);

    const categoriesItem = wrapper.find("Text");

    expect(categoriesItem).toHaveLength(1);
    expect(categoriesItem.props().children).toEqual("entertainment");
  });
});