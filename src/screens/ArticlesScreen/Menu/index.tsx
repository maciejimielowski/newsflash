import React, { useState, ReactElement } from 'react';
import { useDispatch } from 'react-redux';
import './index.css';
import Sort from '../../../_components/Sort';
import { changeSorting } from '../../../redux/actions/actions';
import ArticleCategories from './ArticleCategories';

const Menu = (): ReactElement => {
  const [sortAsc, setSortAsc] = useState(false);
  const dispatch = useDispatch();

  const handleChangeSorting = (newSortAsc: boolean) => {
    setSortAsc(newSortAsc);
    dispatch(changeSorting(newSortAsc));
  };

  return (
    <div className="menu">
      <ArticleCategories />
      <Sort label="date" sortAsc={sortAsc} changeSorting={handleChangeSorting} />
    </div>
  );
};

export default Menu;
