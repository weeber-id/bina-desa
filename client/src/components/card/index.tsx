import React from 'react';

export interface Card extends React.HTMLAttributes<HTMLDivElement> {
  title?: string;
  description?: string;
  img?: string;
  alt?: string;
  date?: string;
}

const Card: React.FC<Card> = ({ description, title, img, alt, date }) => {
  return (
    <div className="card">
      <div className="card__img-container">
        <img src={img} alt={alt} className="card__img" />
      </div>
      <div className="card__details">
        <h3 className="heading-tertiary">{title}</h3>
        <h4 className="card__date">{date}</h4>
        <p className="paragraph">{description}</p>
      </div>
    </div>
  );
};

export default Card;
