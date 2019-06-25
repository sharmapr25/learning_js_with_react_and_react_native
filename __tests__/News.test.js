import {shallow} from "enzyme";
import React from "react";
import News, {ALL_NEWS} from "../src/Containers/News";

describe("News", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<News/>);
  });

  it("should render news with title", () => {
    const news = ALL_NEWS[0];
    const newsItemWrapper = wrapper.find({testID: "newsList"})
      .props().renderItem({item: news});

    expect(newsItemWrapper.props.news).toEqual(news);
  });

  it("should render news with title", () => {
    const news=ALL_NEWS[1];
    const newsItemWrapper = wrapper.find({testID: "newsList"}).props().renderItem({item: news});
    console.log(newsItemWrapper);
    expect(newsItemWrapper.props.news).toEqual(news);
  });

});


