import React from 'react';
import { motion } from 'framer-motion';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const AnimatedSection = ({ 
  children, 
  className = "", 
  delay = 0, 
  duration = 0.8,
  yOffset = 50,
  threshold = 0.1,
  animationType = "fadeUp" // fadeUp, fadeIn, slideInLeft, slideInRight
}) => {
  const { ref, isVisible } = useScrollAnimation(threshold);

  const getAnimationVariants = () => {
    const baseVariants = {
      hidden: {
        opacity: 0,
        y: yOffset,
        scale: 0.95
      },
      visible: {
        opacity: 1,
        y: 0,
        scale: 1,
        transition: {
          duration,
          delay,
          ease: [0.25, 0.46, 0.45, 0.94]
        }
      }
    };

    switch (animationType) {
      case "fadeIn":
        return {
          hidden: { opacity: 0 },
          visible: {
            opacity: 1,
            transition: { duration, delay, ease: [0.25, 0.46, 0.45, 0.94] }
          }
        };
      case "slideInLeft":
        return {
          hidden: { opacity: 0, x: -yOffset },
          visible: {
            opacity: 1,
            x: 0,
            transition: { duration, delay, ease: [0.25, 0.46, 0.45, 0.94] }
          }
        };
      case "slideInRight":
        return {
          hidden: { opacity: 0, x: yOffset },
          visible: {
            opacity: 1,
            x: 0,
            transition: { duration, delay, ease: [0.25, 0.46, 0.45, 0.94] }
          }
        };
      default:
        return baseVariants;
    }
  };

  return (
    <motion.div
      ref={ref}
      className={className}
      initial="hidden"
      animate={isVisible ? "visible" : "hidden"}
      variants={getAnimationVariants()}
    >
      {children}
    </motion.div>
  );
};

export default AnimatedSection;
