import { useEffect, useRef } from 'react';

/**
 * Custom hook for scroll animations
 * Adds 'animate-in' class when element comes into view
 */
export const useScrollAnimation = (threshold = 0.1) => {
  const elementRef = useRef(null);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-in');
          } else {
            // Remove class when scrolling out to allow re-animation
            entry.target.classList.remove('animate-in');
          }
        });
      },
      {
        threshold: threshold,
        rootMargin: '0px 0px -50px 0px', // Trigger slightly before element is fully visible
      }
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, [threshold]);

  return elementRef;
};

/**
 * Wrapper component for scroll animations
 */
export const ScrollAnimationWrapper = ({ 
  children, 
  animation = 'fade-up',
  delay = 0,
  threshold = 0.1,
  className = ''
}) => {
  const ref = useScrollAnimation(threshold);

  return (
    <div
      ref={ref}
      className={`scroll-animate scroll-animate-${animation} ${className}`}
      style={{ '--animation-delay': `${delay}s` }}
    >
      {children}
    </div>
  );
};

export default useScrollAnimation;
