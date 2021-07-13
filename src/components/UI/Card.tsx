import React from 'react';
import './Card.css';

const Card = ({
  className,
  children,
}: {
  className: string;
  children:
    | React.ReactChild
    | React.ReactFragment
    | React.ReactPortal
    | null
    | undefined;
}): JSX.Element => {
  const classes = `card ${className}`;

  return <div className={classes}>{children}</div>;
};

export default Card;
