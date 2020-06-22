import React, { ReactElement } from 'react';

type articleCategoryProps = {
  articleCategory: string;
  active: boolean;
  onClick(articleCategory: string): void;
};

const ArticleCategory = ({ articleCategory, active, onClick }: articleCategoryProps): ReactElement => (
  <div onClick={() => onClick(articleCategory)}>
    {articleCategory} {active && 'active'}
  </div>
);

export default ArticleCategory;
