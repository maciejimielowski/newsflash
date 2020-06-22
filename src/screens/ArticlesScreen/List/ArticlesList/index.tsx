import React, { ReactElement } from 'react';
import ArticleListItem from './ListItem';
import ArticleHelper from '../../../../_helpers/entries/ArticleHelper';
import EmptyState from './EmptyState';
import Article from '../../../../_types/ArticleInterface';

type ArictlesListProps = {
  articles: Article[];
};

const ArticlesList = ({ articles }: ArictlesListProps): ReactElement => (
  <>
    {articles.length > 0 ? (
      articles.map((article) => <ArticleListItem article={article} key={ArticleHelper.url(article)} />)
    ) : (
      <EmptyState />
    )}
  </>
);

export default ArticlesList;
