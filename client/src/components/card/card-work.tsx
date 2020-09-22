import React from 'react';
import Button from '../button';
import { Card } from './index';

const CardWork: React.FC<Card> = ({
  title,
  platform,
  description,
  className,
  img,
  alt,
  ...otherProps
}) => {
  const cardWorkClassName = ['card-work'];
  if (className) cardWorkClassName.push(className);

  return (
    <div {...otherProps} className={cardWorkClassName.join(' ')}>
      <div className="card-work__img-container">
        <img src={img} alt={alt} className="card-work__img" />
      </div>
      <div className="card-work__details">
        <h2 className="heading-secondary">{title}</h2>
        <span className="paragraph">{platform}</span>
        <div className="card-work__description">{description}</div>
      </div>
      <div className="card-work__button-container">
        <Button variant="outlined" color="green">
          See Study Case
        </Button>
      </div>
    </div>
  );
};

export default CardWork;
