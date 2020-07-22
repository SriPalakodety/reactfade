import React, { useState, useEffect } from 'react';
import './styles.css';

const activeFromPx = 20;
const activeToPx = 100;

export const ScrollItem = ({ ...props }) => {
  const [isActive, setIsActive] = useState(false);
  const { children } = props;
  let wrapRef;
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    handleScroll();
  });

  const handleScroll = () => {
    if (wrapRef) {
      const { top } = wrapRef.getBoundingClientRect();
      if (top > activeFromPx && top < activeToPx && !isActive) {
        setIsActive(true);
      }
      if ((top <= activeFromPx || top >= activeToPx) && isActive) {
        setIsActive(false);
      }
    }
  };

  const setWrapRef = (ref) => {
    wrapRef = ref;
    console.log('wrapRef 🍃🍃 : ', wrapRef);
  };

  return (
    <div className={`scroll-item ${isActive && 'scroll-item--active'}`} ref={setWrapRef}>
      {children}
    </div>
  );
};
