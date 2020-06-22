import React, { ReactElement } from 'react';
import ArticlesList from './List';
import Menu from './Menu';
import './index.css';

const ArticleScreen = (): ReactElement => (
  <div className="layout">
    <Menu />
    <ArticlesList />
  </div>
);

export default ArticleScreen;
