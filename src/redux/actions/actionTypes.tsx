import APIResponse from '../../_types/APIResponse';

export const REQUEST_ARTICLES = 'REQUEST_ARTICLES';
export interface RequestArticlesAction {
  type: typeof REQUEST_ARTICLES;
}

export const RECEIVE_ARTICLES = 'RECEIVE_ARTICLES';
export interface ReceiveArticlesAction {
  type: typeof RECEIVE_ARTICLES;
  payload: { response: APIResponse; category: string };
}

export const ARTICLES_ERRORED = 'ARTICLES_ERRORED';
export interface ArticlesErroredAction {
  type: typeof ARTICLES_ERRORED;
  payload: { category: string };
}

export const CHANGE_SORTING = 'CHANGE_SORTING';
export interface ChangeSortingAction {
  type: typeof CHANGE_SORTING;
  payload: { sortAsc: boolean };
}

export const ARTICLES_LOADED = 'ARTICLES_LOADED';
export interface ArticlesLoadedAction {
  type: typeof ARTICLES_LOADED;
}

export const CHANGE_ACTIVE_ARTICLE_CATEGORY = 'CHANGE_ACTIVE_ARTICLE_CATEGORY';
export interface ChangeActiveArticleCategoryAction {
  type: typeof CHANGE_ACTIVE_ARTICLE_CATEGORY;
  payload: { activeCategory: string };
}

export type ArticlesActionTypes =
  | RequestArticlesAction
  | ReceiveArticlesAction
  | ArticlesErroredAction
  | ChangeSortingAction
  | ArticlesLoadedAction
  | ChangeActiveArticleCategoryAction;
