import React from 'react';
import Lottie from 'lottie-react';
import passportAnimation from '../../PassportTravel.json';

interface PassportAnimationProps {
  className?: string;
  loop?: boolean;
  autoplay?: boolean;
}

export const PassportAnimation: React.FC<PassportAnimationProps> = ({
  className = '',
  loop = true,
  autoplay = true
}) => {
  return (
    <div className={`flex justify-center items-center ${className}`}>
      <Lottie
        animationData={passportAnimation}
        loop={loop}
        autoplay={autoplay}
        style={{ width: '100%', maxWidth: '400px', height: 'auto' }}
      />
    </div>
  );
};
