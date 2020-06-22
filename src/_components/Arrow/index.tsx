import React, { ReactElement } from 'react';
import './index.css';

type ArrowProps = {
  direction: string;
  active: boolean;
};

const Arrow = ({ direction, active }: ArrowProps): ReactElement => (
  <div className={`arrow-${direction} ${active && 'active'}`} />
);

export default Arrow;
