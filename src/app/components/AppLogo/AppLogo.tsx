'use client';

import { useEffect, useState } from 'react';
import styles from './AppLogo.module.css';

type LogoSize = 'small' | 'medium' | 'large';

interface AppLogoProps {
  isAnimated?: boolean;
  size?: LogoSize;
  repeat?: boolean;
}

export const AppLogo = ({ isAnimated = false, size = 'medium', repeat = true }: AppLogoProps) => {
  const [scale, setScale] = useState(0.9);
  const [fillPosition, setFillPosition] = useState(0);
  const [isAnimating, setIsAnimating] = useState(true);

  useEffect(() => {
    if (isAnimated && isAnimating) {
      let animationFrame: number;
      let startTime: number;
      const duration = 3000; // 3 seconds

      const animate = (timestamp: number) => {
        if (!startTime) startTime = timestamp;
        const progress = (timestamp - startTime) % duration / duration;

        // Scale animation
        const scaleValue = 0.9 + (Math.sin(progress * Math.PI * 2) * 0.2);
        setScale(scaleValue);

        // Fill animation
        const fillValue = progress;
        setFillPosition(fillValue);

        if (!repeat && progress > 0.99) {
          setIsAnimating(false);
          return;
        }

        animationFrame = requestAnimationFrame(animate);
      };

      animationFrame = requestAnimationFrame(animate);

      return () => {
        cancelAnimationFrame(animationFrame);
      };
    }
  }, [isAnimated, repeat, isAnimating]);

  const getFontSize = () => {
    switch (size) {
      case 'small':
        return '1.25rem'; // 20px
      case 'large':
        return '3.75rem'; // 60px
      default:
        return '2.5rem'; // 40px
    }
  };

  return (
    <div className={styles.logoContainer}>
      {isAnimated ? (
        <div
          className={styles.animatedLogo}
          style={{
            transform: `scale(${scale})`,
            backgroundImage: `linear-gradient(
              to right,
              #FFFFFF ${fillPosition * 100}%,
              rgba(255, 255, 255, 0) ${fillPosition * 100}%
            )`,
            fontSize: getFontSize(),
          }}
        >
          Openlly
        </div>
      ) : (
        <div
          className={styles.staticLogo}
          style={{
            fontSize: getFontSize(),
          }}
        >
          Openlly
        </div>
      )}
    </div>
  );
}; 