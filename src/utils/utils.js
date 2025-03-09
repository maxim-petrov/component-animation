/**
 * Utility functions for components
 */

/**
 * Function for smooth accordion animation
 * @param {HTMLElement} accordionContent - The content element of the accordion
 * @param {boolean} isOpen - Whether the accordion is open or closed
 * @param {number} duration - Animation duration in milliseconds (default: 300)
 */
export const toggleAccordion = (accordionContent, isOpen, duration = 300) => {
  // Cancel any running animation
  if (accordionContent.animation) {
    accordionContent.animation.cancel();
  }
  
  // Get the height of the content
  const startHeight = accordionContent.offsetHeight;
  const endHeight = isOpen 
    ? accordionContent.scrollHeight 
    : 0;
  
  // Reset display and height for animation
  accordionContent.style.overflow = 'hidden';
  accordionContent.style.height = startHeight + 'px';
  
  // Create animation
  accordionContent.animation = accordionContent.animate(
    [
      { height: startHeight + 'px' },
      { height: endHeight + 'px' }
    ],
    {
      duration: duration,
      easing: 'cubic-bezier(0.4, 0, 0.2, 1)' // Material Design standard easing
    }
  );
  
  // When animation ends
  accordionContent.animation.onfinish = () => {
    accordionContent.style.height = isOpen ? 'auto' : '0px';
    accordionContent.style.overflow = isOpen ? 'visible' : 'hidden';
    accordionContent.animation = null;
  };
  
  // If animation is cancelled
  accordionContent.animation.oncancel = () => {
    accordionContent.animation = null;
  };
};

/**
 * Helper function to toggle accordion with a sliding animation
 * Usage: onClick={() => slideToggle(contentRef.current, !isOpen, setIsOpen)}
 * @param {HTMLElement} element - The content element to toggle
 * @param {boolean} show - Whether to show or hide the element
 * @param {Function} setStateCallback - Optional state setter function
 * @param {number} duration - Animation duration in milliseconds (default: 300)
 */
export const slideToggle = (element, show, setStateCallback = null, duration = 300) => {
  if (!element) return;
  
  toggleAccordion(element, show, duration);
  
  // Update state if callback provided
  if (setStateCallback) {
    setStateCallback(show);
  }
}; 