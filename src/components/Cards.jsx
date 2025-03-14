import React from 'react';
import { motion } from 'framer-motion';
import { cardHoverAnimation, heartIconAnimation, cardAppearAnimation } from '../animations/cardAnimations';
import '../global.css';
import '../styles/components/Cards.css';

const Card = ({ id, title, subtitle, index }) => {
  return (
    <motion.div 
      className="card-card-652-0-0-4 card-primary-688-0-0-4 card-compact-bcf-0-0-4 F_M0X" 
      data-e2e-id={`card-${id}`}
      {...cardHoverAnimation}
      {...cardAppearAnimation}
      custom={index}
    >
      <div className="card-picture-d68-0-0-4">
        <div style={{ background: 'rgb(232, 232, 232)', width: '48px', height: '48px' }}></div>
      </div>
      <div className="card-titleWrapper-396-0-0-4">
        <div className="tg-label-large-medium-3d8-7-0-3">
          <div className="card-title-40e-0-0-4">{title}</div>
        </div>
        <div className="tg-label-standard-regular-4b7-7-0-3">
          <div className="card-subTitle-1da-0-0-4">{subtitle}</div>
        </div>
      </div>
      <div className="card-icon-b49-0-0-4">
        <motion.div 
          className="icon-root-864-6-0-3 icon-root--24-ad3-6-0-3"
          {...heartIconAnimation}
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none">
            <path 
              fill="currentColor" 
              fillRule="evenodd" 
              d="M2.617 3.922a6.323 6.323 0 0 1 9.08 0l.303.31.302-.31a6.323 6.323 0 0 1 9.08 0c2.49 2.548 2.49 6.669 0 9.217l-8.176 8.354a1.688 1.688 0 0 1-2.412 0L2.618 13.14c-2.49-2.549-2.49-6.67 0-9.218Z" 
              clipRule="evenodd"
            />
          </svg>
        </motion.div>
      </div>
    </motion.div>
  );
};

const Cards = () => {
  const cardsData = [
    { id: 1, title: '1-комнатная', subtitle: 'Подзаголовок' },
    { id: 2, title: '2-комнатная', subtitle: 'Подзаголовок' },
    { id: 3, title: '3-комнатная', subtitle: 'Подзаголовок' },
    { id: 4, title: '4-комнатная', subtitle: 'Подзаголовок' },
    { id: 5, title: '5-комнатная', subtitle: 'Подзаголовок' }
  ];

  return (
    <div className="QIMpV">
      {cardsData.map((card, index) => (
        <Card 
          key={card.id}
          id={card.id}
          title={card.title}
          subtitle={card.subtitle}
          index={index}
        />
      ))}
    </div>
  );
};

export default Cards; 