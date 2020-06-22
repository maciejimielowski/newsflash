import React, { useEffect, ReactElement } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './index.css';
import { Loader } from 'semantic-ui-react';
import { getArticles } from '../../../redux/actions/actions';
import RootStore from '../../../_types/RootStore';
import ArticlesList from './ArticlesList';

const Wrapper = (): ReactElement => {
  const dispatch = useDispatch();
  const isFetching = useSelector((state: RootStore) => state.articles.isFetching);
  const activeCategory = useSelector((state: RootStore) => state.articles.activeCategory);
  const articles = useSelector((state: RootStore) => state.articles.currentArticles);

  useEffect(() => {
    dispatch(getArticles(activeCategory));
  }, [dispatch, activeCategory]);

  return (
    <div className="articles-list-container">
      <div className="articles-list">{isFetching ? <Loader active /> : <ArticlesList articles={articles} />}</div>
    </div>
  );
};

export default Wrapper;
