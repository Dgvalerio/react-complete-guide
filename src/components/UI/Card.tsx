import React from 'react';
import './Card.css';

const Card = (props: { className: string; children: React.ReactChild | React.ReactFragment | React.ReactPortal | null | undefined; }): JSX.Element => {
  const classes = 'card ' + props.className;

  return <div className={classes}>{props.children}</div>;
};

export default Card;