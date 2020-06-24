import React, { ReactElement } from 'react';
import './index.css';

type ArrowProps = {
  direction: string; // it definitely should be an enum Direction { Up = 'up' ... }, then in Sort it'll hint options and block invalid ones. Make friends with enums, they are very useful
  active: boolean;
};

const Arrow = ({ direction, active }: ArrowProps): ReactElement => ( // const Arrow: React.FC<ArrowProps> <- will infer props in declaration, it's more common pattern
  <div className={`arrow-${direction} ${active && 'active'}`} />
);

export default Arrow;
