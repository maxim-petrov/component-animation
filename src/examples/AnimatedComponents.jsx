import React, { useState } from 'react';
import { FadeIn, SlideIn, ZoomIn, StaggeredEntrance } from '../animations/components';

// Анимированная карточка с использованием FadeIn
export const AnimatedCard = ({ title, description, image, index }) => {
  return (
    <FadeIn 
      duration="medium" 
      entranceDirection="bottom"
    >
      {(props, state) => (
        <div {...props} className="animated-card">
          {image && <div className="card-image">{image}</div>}
          <div className="card-content">
            <h3>{title}</h3>
            <p>{description}</p>
          </div>
        </div>
      )}
    </FadeIn>
  );
};

// Анимированное модальное окно с использованием ZoomIn
export const AnimatedModal = ({ isOpen, onClose, title, children }) => {
  if (!isOpen) return null;
  
  return (
    <div className="modal-overlay" onClick={onClose}>
      <ZoomIn duration="medium">
        {(props, state) => (
          <div 
            {...props} 
            className="modal-content"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="modal-header">
              <h3>{title}</h3>
              <button className="modal-close" onClick={onClose}>×</button>
            </div>
            <div className="modal-body">
              {children}
            </div>
          </div>
        )}
      </ZoomIn>
    </div>
  );
};

// Анимированное сообщение с использованием SlideIn
export const AnimatedNotification = ({ type = 'info', message, onDismiss }) => {
  return (
    <SlideIn 
      duration="medium" 
      enterFrom="right"
      fade="in"
    >
      {(props, state) => (
        <div 
          {...props} 
          className={`notification notification-${type}`}
        >
          <div className="notification-content">
            <p>{message}</p>
          </div>
          {onDismiss && (
            <button className="notification-dismiss" onClick={onDismiss}>
              Закрыть
            </button>
          )}
        </div>
      )}
    </SlideIn>
  );
};

// Анимированный список с использованием StaggeredEntrance
export const AnimatedList = ({ items }) => {
  return (
    <StaggeredEntrance columns="responsive" delayStep={50}>
      {items.map((item, index) => (
        <FadeIn key={item.id} duration="medium" entranceDirection="bottom">
          <div className="animated-list-item">
            <h4>{item.title}</h4>
            {item.description && <p>{item.description}</p>}
          </div>
        </FadeIn>
      ))}
    </StaggeredEntrance>
  );
};

// Анимированная галерея с использованием ZoomIn и StaggeredEntrance
export const AnimatedGallery = ({ images }) => {
  const [selectedImage, setSelectedImage] = useState(null);
  
  return (
    <div className="animated-gallery">
      <StaggeredEntrance columns={3} delayStep={80}>
        {images.map((image, index) => (
          <ZoomIn key={image.id} duration="medium">
            <div 
              className="gallery-item"
              onClick={() => setSelectedImage(image)}
            >
              <img src={image.url} alt={image.alt || 'Gallery image'} />
            </div>
          </ZoomIn>
        ))}
      </StaggeredEntrance>
      
      {selectedImage && (
        <AnimatedModal 
          isOpen={!!selectedImage} 
          onClose={() => setSelectedImage(null)}
          title={selectedImage.title || 'Image Preview'}
        >
          <div className="gallery-preview">
            <img 
              src={selectedImage.url} 
              alt={selectedImage.alt || 'Preview'} 
              className="preview-image"
            />
            {selectedImage.description && (
              <p className="preview-description">{selectedImage.description}</p>
            )}
          </div>
        </AnimatedModal>
      )}
    </div>
  );
};

// CSS для примеров
export const AnimatedComponentsStyles = `
  /* Стили для анимированной карточки */
  .animated-card {
    background-color: white;
    border-radius: 8px;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
    overflow: hidden;
    transition: box-shadow 0.2s var(--motion-standard-productive);
  }
  
  .animated-card:hover {
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15);
  }
  
  .card-image {
    width: 100%;
    height: 180px;
    background-color: #f0f0f0;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  
  .card-content {
    padding: 16px;
  }
  
  .card-content h3 {
    margin-top: 0;
    margin-bottom: 8px;
    color: #333;
  }
  
  .card-content p {
    margin: 0;
    color: #666;
  }
  
  /* Стили для модального окна */
  .modal-overlay {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 1000;
  }
  
  .modal-content {
    background-color: white;
    border-radius: 8px;
    max-width: 90%;
    width: 500px;
    max-height: 90vh;
    overflow: auto;
    box-shadow: 0 4px 24px rgba(0, 0, 0, 0.2);
  }
  
  .modal-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 16px;
    border-bottom: 1px solid #eee;
  }
  
  .modal-header h3 {
    margin: 0;
    color: #333;
  }
  
  .modal-close {
    background: none;
    border: none;
    font-size: 24px;
    cursor: pointer;
    color: #777;
  }
  
  .modal-body {
    padding: 16px;
  }
  
  /* Стили для уведомлений */
  .notification {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 12px 16px;
    border-radius: 6px;
    margin-bottom: 16px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  }
  
  .notification-info {
    background-color: #e8f0fe;
    border-left: 4px solid #4a6cf7;
  }
  
  .notification-success {
    background-color: #e6f4ea;
    border-left: 4px solid #34a853;
  }
  
  .notification-warning {
    background-color: #fef3e6;
    border-left: 4px solid #fbbc04;
  }
  
  .notification-error {
    background-color: #fdecec;
    border-left: 4px solid #ea4335;
  }
  
  .notification-content {
    flex: 1;
  }
  
  .notification-content p {
    margin: 0;
    color: #333;
  }
  
  .notification-dismiss {
    background: none;
    border: none;
    color: #777;
    cursor: pointer;
    margin-left: 16px;
    padding: 4px 8px;
    border-radius: 4px;
  }
  
  .notification-dismiss:hover {
    background-color: rgba(0, 0, 0, 0.05);
  }
  
  /* Стили для анимированного списка */
  .animated-list-item {
    background-color: white;
    border-radius: 8px;
    padding: 16px;
    margin-bottom: 16px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
    border-left: 4px solid #4a6cf7;
  }
  
  .animated-list-item h4 {
    margin-top: 0;
    margin-bottom: 8px;
    color: #333;
  }
  
  .animated-list-item p {
    margin: 0;
    color: #666;
  }
  
  /* Стили для галереи */
  .animated-gallery {
    width: 100%;
  }
  
  .gallery-item {
    border-radius: 8px;
    overflow: hidden;
    cursor: pointer;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
    transition: transform 0.2s var(--motion-standard-expressive);
  }
  
  .gallery-item:hover {
    transform: scale(1.03);
  }
  
  .gallery-item img {
    width: 100%;
    height: auto;
    display: block;
  }
  
  .gallery-preview {
    text-align: center;
  }
  
  .preview-image {
    max-width: 100%;
    max-height: 70vh;
    border-radius: 4px;
  }
  
  .preview-description {
    margin-top: 12px;
    color: #333;
  }
`; 