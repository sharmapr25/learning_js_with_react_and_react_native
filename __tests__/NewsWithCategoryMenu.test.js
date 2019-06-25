import {shallow} from "enzyme";
import React from "react";
import NewsWithCategoryMenu from "../src/Containers/NewsWithCategoryMenu";
import {ALL_NEWS} from "../src/Containers/News";
import CategoryMenu from "../src/Components/CategoryMenu";

describe("News with category menu", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<NewsWithCategoryMenu/>);
  });

  it("should render news without category", () => {
    const news = ALL_NEWS[0];
    const newsListWrapper = wrapper.find({testID: "newsList"});
    const newsItemWrapper = newsListWrapper.props().renderItem({item: news});

    expect(newsItemWrapper.props.news).toEqual(news);
  });

  it("should render categories of all news", () => {
    const categories = ["entertainment","science"];

    const categoryItemWrapper = wrapper.find(CategoryMenu);
    expect(categoryItemWrapper.props().categories).toEqual(categories);
  });

});
