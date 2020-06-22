import { ArticlesActionTypes } from '../actions/actionTypes';
import Article from '../../_types/ArticleInterface';
import ArticlesStore from '../../_types/ArticlesStore';

const initialState = {
  isFetching: false,
  sort: {
    sortBy: 'date',
    sortAsc: true,
  },
  currentArticles: [],
  activeCategory: 'general',
};

export default function reducer(state = initialState, action: ArticlesActionTypes): ArticlesStore {
  switch (action.type) {
    case 'REQUEST_ARTICLES':
      return { ...state, isFetching: true };
    case 'RECEIVE_ARTICLES': {
      const {
        response: { articles },
      } = action.payload;
      return {
        ...state,
        isFetching: false,
        currentArticles: articles,
      };
    }
    case 'CHANGE_SORTING': {
      const { sortAsc } = action.payload;
      const articles = state.currentArticles;
      const articlesSorted = articles.slice().sort((a: Article, b: Article) => {
        const asc = sortAsc ? -1 : 1;
        return (new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()) * asc;
      });
      return {
        ...state,
        currentArticles: articlesSorted,
      };
    }
    case 'CHANGE_ACTIVE_ARTICLE_CATEGORY': {
      const { activeCategory } = action.payload;
      return {
        ...state,
        activeCategory,
      };
    }
    case 'ARTICLES_ERRORED': {
      return {
        ...state,
        currentArticles: [],
        isFetching: false,
      };
    }
    default:
      return state;
  }
}
