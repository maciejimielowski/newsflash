import { Dispatch } from 'redux';
import fetchArticles from '../../APIService';
import APIResponse from '../../_types/APIResponse';
import * as actionTypes from './actionTypes';

const requestArticles = (): actionTypes.RequestArticlesAction => ({
  type: actionTypes.REQUEST_ARTICLES,
});

const receiveArticleData = (response: APIResponse, category: string): actionTypes.ReceiveArticlesAction => ({
  type: actionTypes.RECEIVE_ARTICLES,
  payload: { response, category },
});

const handleArticleDataError = (category: string): actionTypes.ArticlesErroredAction => ({
  type: actionTypes.ARTICLES_ERRORED,
  payload: { category },
});

export const changeSorting = (sortAsc: boolean): actionTypes.ChangeSortingAction => ({
  type: actionTypes.CHANGE_SORTING,
  payload: { sortAsc },
});

export const changeActiveArticleCategory = (category: string): actionTypes.ChangeActiveArticleCategoryAction => ({
  type: actionTypes.CHANGE_ACTIVE_ARTICLE_CATEGORY,
  payload: { activeCategory: category },
});

const fetchData = (category: string, dispatch: Dispatch) =>
  fetchArticles(category)
    .then((response: APIResponse) => {
      if (response.status === 'ok') {
        dispatch(receiveArticleData(response, category));
      } else {
        dispatch(handleArticleDataError(category));
      }
    })
    .catch(() => dispatch(handleArticleDataError(category)));

export const getArticles = (category: string) => (dispatch: Dispatch): void => {
  dispatch(requestArticles());
  fetchData(category, dispatch);
};
