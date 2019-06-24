import {shallow} from "enzyme";
import React from "react";
import CategoryMenu from "../../src/Components/CategoryMenu";

describe('Category menu', () => {
  it("should render two text when three categories exists", () => {
    const categories = [{
      id: 1,
      name: 'sports'
    }, {
      id: 2,
      name: 'entertainment'
    }];
    const wrapper = shallow(<CategoryMenu categories={categories}/>);

    const categoriesItem = wrapper.find("Text");

    expect(categoriesItem).toHaveLength(2);
  });

  it("should render one text when one categories exists", () => {
    const categories = [{
      id: 1,
      name: 'entertainment'
    }];
    const wrapper = shallow(<CategoryMenu categories={categories}/>);

    const categoriesItem = wrapper.find("Text");

    expect(categoriesItem).toHaveLength(1);
    expect(categoriesItem.props().children).toEqual("entertainment");
  });
});