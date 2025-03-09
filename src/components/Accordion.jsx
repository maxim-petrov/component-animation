import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { accordionAnimationConfig, arrowAnimation, contentAnimation } from '../animations/accordionAnimations';
import '../global.css';

const Accordion = ({ title = 'Заголовок', subtitle = 'Подзаголовок', content = 'Оригинал документа, на основании которого продавец стал собственником квартиры. Например, договор купли-продажи, договор долевого участия, договор дарения и другие (находится у собственника)' }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="_Gq5_ ql7Up" data-e2e-id="accordion-base">
      <div className="f_vB6">
        <div 
          className="acr-root-bdf-12-2-0 acr-divider-502-12-2-0" 
          data-e2e-id="accordion-default" 
          tabIndex="0"
          role="presentation"
        >
          <div 
            onClick={toggleAccordion}
            data-e2e-id="accordion-default--toggle-button" 
            className="acr-wrapTop-79f-12-2-0" 
            tabIndex="-1"
            style={{ cursor: 'pointer' }}
          >
            <div className="acr-defaultTitle-147-12-2-0">
              <div className="acr-wrapTitles-556-12-2-0">
                <div className="acr-header-e6e-12-2-0">
                  <div>
                    <div className="acr-wrapTitle-d35-12-2-0">
                      <h2 className="tg-heading-small-dc0-7-0-3">
                        <div className="acr-title-c71-12-2-0">{title}</div>
                      </h2>
                    </div>
                    <h5 className="acr-subtitle-d8b-12-2-0">{subtitle}</h5>
                  </div>
                </div>
              </div>
            </div>
            <motion.div 
              className="acr-arrow-60f-12-2-0"
              animate={{ rotate: isOpen ? 180 : 0 }}
              transition={accordionAnimationConfig}
            >
              <div className="icon-root-864-6-0-3 acr-icon-ea7-12-2-0">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none">
                  <path 
                    fill="currentColor" 
                    fillRule="evenodd"
                    d="M7.41 11.09a.833.833 0 0 0 1.18 0l5-5a.833.833 0 0 0-1.18-1.18L8 9.322l-4.41-4.41A.833.833 0 0 0 2.41 6.09l5 5Z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
            </motion.div>
          </div>
          <AnimatePresence initial={false}>
            {isOpen && (
              <motion.div 
                className="acr-content-c3a-12-2-0"
                {...contentAnimation}
              >
                <div 
                  className="tg-body-standard-regular-bdb-7-0-3"
                  style={{ padding: "0 24px 24px" }}
                >{content}</div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};

export default Accordion; 