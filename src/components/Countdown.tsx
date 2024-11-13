// src/components/Countdown.tsx
import React, { useEffect, useState } from 'react';

interface CountdownProps {
  targetDate: string;
  className?: string; // Add className prop
}

const Countdown: React.FC<CountdownProps> = ({ targetDate, className }) => {
  const [countdown, setCountdown] = useState('');

  useEffect(() => {
    const target = new Date(targetDate).getTime();
    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = target - now;

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      setCountdown(`${days}d ${hours}h ${minutes}m ${seconds}s`);

      if (distance < 0) {
        clearInterval(interval);
        setCountdown('EXPIRED');
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [targetDate]);

  return <div className={className}>{countdown}</div>;
};

export default Countdown;