import React, { useEffect, useState } from 'react';

const Timer = () => {
  const [timer, setTimer] = useState(null);

  useEffect(() => {
    const countDownDate = new Date(Date.now() + 600000).getTime();

    const intervalId = setInterval(() => {
      const now = new Date().getTime();
      const distance = countDownDate - now;
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      if (distance < 1000) {
        clearInterval(intervalId);
        // Handle timer completion, e.g., redirect or trigger an event
      }

      setTimer(`${minutes}:${seconds} минут`);
    }, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return <p className="demo">{timer}</p>;
};

export default Timer;
