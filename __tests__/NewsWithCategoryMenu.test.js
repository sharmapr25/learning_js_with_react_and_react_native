import { shallow } from 'enzyme';
import React from 'react';
import axios from 'axios';

import NewsWithCategoryMenu from '../src/Containers/NewsWithCategoryMenu';
import { ALL_NEWS } from '../src/Containers/News';
import CategoryMenu from '../src/Components/CategoryMenu';

jest.mock('axios', () => ({
  get: jest.fn().mockResolvedValue({
    data: [{
      id: 1,
      categoryId: 1,
      title: 'A news title',
      description: 'A simple description',
      imageUrl: 'https://ichef.bbci.co.uk/news/1024/branded_news/17C79/production/_107510479_compositehuntjohnson.jpg',
      publishedAt: '2019-06-24T03:15:58Z',
      content: 'A long long news content'
    }]
  })
}));

const flushPromises = () => new Promise(setImmediate);

describe('News with category menu', () => {
  let wrapper;
  let mockNews;

  beforeEach(async () => {
    const getResponse = await axios.get();
    mockNews = getResponse.data;
    wrapper = shallow(<NewsWithCategoryMenu/>);
  });

  describe('#render', () => {
    it('should render news without category', () => {
      const news = ALL_NEWS[0];
      const newsListWrapper = wrapper.find({ testID: 'newsList' });
      const newsItemWrapper = newsListWrapper.props().renderItem({ item: news });

      expect(newsItemWrapper.props.news).toEqual(news);
    });

    it('should render categories of all news', () => {
      const categories = ['entertainment', 'science'];

      const categoryItemWrapper = wrapper.find(CategoryMenu);
      expect(categoryItemWrapper.props().categories).toEqual(categories);
    });
  });

  describe('componentDidMount', () => {
    it('should fetch news from server', () => {
      const expectedUrl = 'http://localhost:3000/news';
      expect(axios.get).toHaveBeenCalledWith(expectedUrl);
    });

    it('should render list with news data from server', async () => {
      await flushPromises();
      const flatListWrapper = wrapper.find('FlatList');
      const actualListData = flatListWrapper.props().data;
      expect(actualListData).toEqual(mockNews);
    });

    it('should render news item component with news item', async () => {
      const news = mockNews[0];
      await flushPromises();
      const flatListWrapper = wrapper.find('FlatList');
      const renderItemProps = flatListWrapper.props().renderItem;
      const renderedItem = renderItemProps({ item: news });
      expect(renderedItem.props.news).toEqual(news);
    });

    it('should render news item component when rendering list', async () => {
      const news = mockNews[0];
      await flushPromises();
      const flatListWrapper = wrapper.find('FlatList');
      const RenderItemComponent = flatListWrapper.props().renderItem;
      const wrapperItem = shallow(<RenderItemComponent item={news} />);
      expect(wrapperItem.find('NewsItemWithoutCategory')).toHaveLength(1);
    });
  });
});