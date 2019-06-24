import { shallow } from 'enzyme';
import React from 'react';
import axios from 'axios';

import NewsWithCategoryMenu from '../src/Containers/NewsWithCategoryMenu';
import { ALL_NEWS } from '../src/Containers/News';

jest.mock('axios', () => ({
  get: jest.fn().mockImplementation((url) => {
    if (url.includes('/news')) {
      return Promise.resolve({
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
    }

    return Promise.resolve({
      data: [{
        id: 1,
        name: 'Sport'
      }]
    });
  })
}));

const flushPromises = () => new Promise(setImmediate);

describe('NewsWithCategoryMenu', () => {
  let wrapper;
  let mockNewsList;
  let mockCategories;

  beforeEach(async () => {
    const newsResponse = await axios.get('http://localhost:3000/news');
    const categoriesResponse = await axios.get('http://localhost:3000/categories');
    mockNewsList = newsResponse.data;
    mockCategories = categoriesResponse.data;
    wrapper = shallow(<NewsWithCategoryMenu/>);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  describe('#render', () => {
    it('should render news without category', () => {
      const news = ALL_NEWS[0];
      const newsListWrapper = wrapper.find({ testID: 'newsList' });
      const newsItemWrapper = newsListWrapper.props().renderItem({ item: news });

      expect(newsItemWrapper.props.news).toEqual(news);
    });
  });

  describe('componentDidMount', () => {
    describe('#fetchNews', () => {
      it('should fetch news from server', () => {
        const expectedUrl = 'http://localhost:3000/news';
        expect(axios.get).toHaveBeenCalledWith(expectedUrl);
      });

      it('should render list with news data from server', async () => {
        await flushPromises();
        const flatListWrapper = wrapper.find('FlatList');
        const actualListData = flatListWrapper.props().data;
        expect(actualListData).toEqual(mockNewsList);
      });

      // we can't test whether renderItem render correct component
      it('should render news item component with news item', async () => {
        const news = mockNewsList[0];
        await flushPromises();
        const flatListWrapper = wrapper.find('FlatList');
        const renderItemProps = flatListWrapper.props().renderItem;
        const renderedItem = renderItemProps({ item: news });
        expect(renderedItem.props.news).toEqual(news);
      });

      // here we can test renderItem is render correct news item component
      it('should render news item component with news props', async () => {
        const news = mockNewsList[0];
        await flushPromises();
        const flatListWrapper = wrapper.find('FlatList');
        const RenderItemComponent = flatListWrapper.props().renderItem;
        const wrapperItem = shallow(<RenderItemComponent item={news} />);
        const item = wrapperItem.find('NewsItemWithoutCategory');
        expect(item.props().news).toEqual(news);
      });
    });

    describe('#fetchCategories', () => {
      it('should get news categories to server', () => {
        const expectedUrl = 'http://localhost:3000/categories';
        expect(axios.get).toHaveBeenCalledWith(expectedUrl);
      });

      it('should category menu component with categories from server', async () => {
        await flushPromises();
        const categoryMenu = wrapper.find('CategoryMenu');
        expect(categoryMenu.props().categories).toEqual(mockCategories);
      });
    });
  });
});