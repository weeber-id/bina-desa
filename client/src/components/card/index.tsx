import React from 'react';
import Button from '../button';
import CardWork from './card-work';

export interface Card extends React.HTMLAttributes<HTMLDivElement> {
  type?: 'philosophy' | 'service' | 'work';
  Icon?: React.FunctionComponent<React.SVGProps<SVGSVGElement>> & {
    title?: string | undefined;
  };
  title?: string;
  description?: string;
  img?: string;
  alt?: string;
  platform?: string;
}

const Card: React.FC<Card> = ({
  type,
  description,
  title,
  img,
  alt,
  platform,
}) => {
  if (type === 'work') {
    return (
      <CardWork
        title={title}
        description={description}
        img={img}
        platform={platform}
      />
    );
  }

  return (
    <div className="card">
      <div className="card__img-container">
        <img src={img} alt={alt} className="card__img" />
      </div>
      <div className="card__details">
        <h3 className="heading-tertiary">{title}</h3>
        <p className="paragraph">{description}</p>
        <Button color="green" variant="outlined">
          Contact Us
        </Button>
      </div>
    </div>
  );
};

export default Card;
