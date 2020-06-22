import React, { ReactElement } from 'react';
import Arrow from '../Arrow';
import './index.css';

type SortProps = {
  changeSorting(sortAsc: boolean): void;
  sortAsc: boolean;
  label: string;
};

const Sort = ({ changeSorting, sortAsc, label }: SortProps): ReactElement => (
  <div className="sort-container" onClick={() => changeSorting(!sortAsc)} role="button">
    <span className="sort-label">Sort by {label}</span>
    <div className="arrow-container">
      <Arrow direction="up" active={sortAsc} />
      <Arrow direction="down" active={!sortAsc} />
    </div>
  </div>
);

export default Sort;
