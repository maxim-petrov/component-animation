import React from 'react';
import { motion } from 'framer-motion';
import { bannerHoverAnimation, bannerIconAnimation, bannerAppearAnimation, bannerImageAnimation } from '../animations/bannerAnimations';
import '../global.css';
import '../styles/components/Cards.css';

const Banner = ({ id, title, subtitle, index }) => {
  return (
    <motion.div 
      className="card-banner-f1b-0-0-4 card-medium-cfd-0-0-4 card-primary-c1a-0-0-4 card-clickable-77a-0-0-4 aMRDQ wOzPG" 
      data-e2e-id={`banner-${id}`}
      {...bannerHoverAnimation}
      {...bannerAppearAnimation}
      whileHover="hover"
    >
      <div className="card-icon-236-0-0-4">
        <motion.div 
          className="icon-root-864-6-0-3"
          {...bannerIconAnimation}
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none">
            <path 
              fill="currentColor" 
              fillRule="evenodd" 
              d="M1.745 2.615a4.215 4.215 0 0 1 6.053 0L8 2.82l.202-.206a4.215 4.215 0 0 1 6.053 0 4.413 4.413 0 0 1 0 6.144l-5.45 5.57c-.442.45-1.168.45-1.609 0l-5.45-5.57a4.414 4.414 0 0 1-.001-6.144Z" 
              clipRule="evenodd"
            />
          </svg>
        </motion.div>
      </div>
      <div className="card-content-884-0-0-4">
        <div className="tg-label-large-medium-3d8-7-0-3">
          <div className="card-title-834-0-0-4">{title}</div>
        </div>
        <div className="tg-label-standard-regular-4b7-7-0-3">
          <div className="card-subTitle-75a-0-0-4">{subtitle}</div>
        </div>
        <div className="card-content-884-0-0-4">
          <motion.img 
            src="https://statics.dmclk.ru/web-ui-library/images/topline/homeland-projects.svg" 
            alt="Проекты домов" 
            width="96" 
            height="96" 
            className="_zBvS"
            {...bannerImageAnimation}
          />
        </div>
      </div>
    </motion.div>
  );
};

const Banners = () => {
  const bannersData = [
    { id: 11, title: '1-комнатная', subtitle: 'Подзаголовок' },
    { id: 21, title: '2-комнатная', subtitle: 'Подзаголовок' },
    { id: 31, title: '3-комнатная', subtitle: 'Подзаголовок' },
    { id: 41, title: '4-комнатная', subtitle: 'Подзаголовок' },
    { id: 51, title: '5-комнатная', subtitle: 'Подзаголовок' }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.4,
        delayChildren: 0.1
      }
    }
  };

  return (
    <motion.div 
      className="QIMpV"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {bannersData.map((banner, index) => (
        <Banner 
          key={banner.id}
          id={banner.id}
          title={banner.title}
          subtitle={banner.subtitle}
          index={index}
        />
      ))}
    </motion.div>
  );
};

export default Banners; 