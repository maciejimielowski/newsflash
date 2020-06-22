import React, { ReactElement, SyntheticEvent } from 'react';
import { useDispatch } from 'react-redux';
import { Select, DropdownProps } from 'semantic-ui-react';
import './index.css';
import { changeActiveArticleCategory } from '../../../../redux/actions/actions';

const ARTICLE_CATEGORIES = [
  { key: 'general', value: 'general', text: 'General' },
  { key: 'business', value: 'business', text: 'Business' },
  { key: 'entertainment', value: 'entertainment', text: 'Entertainment' },
  { key: 'health', value: 'health', text: 'Health' },
  { key: 'science', value: 'science', text: 'Science' },
  { key: 'sports', value: 'sports', text: 'Sports' },
  { key: 'technology', value: 'technology', text: 'Technology' },
];

const ArticleCategories = (): ReactElement => {
  const dispatch = useDispatch();

  const handleChangeActiveCategory = (articleCategory: string) => {
    dispatch(changeActiveArticleCategory(articleCategory));
  };
  return (
    <div className="article-categories">
      <Select
        placeholder="Select news category"
        options={ARTICLE_CATEGORIES}
        onChange={(event: SyntheticEvent, option: DropdownProps) => handleChangeActiveCategory(`${option.value}`)}
      />
    </div>
  );
};

export default ArticleCategories;
