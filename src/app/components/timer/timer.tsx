"use client";

import { useState, useEffect } from 'react';

export default function Timer() {
  const [time, setTime] = useState<string>('');

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setTime(now.toLocaleTimeString());
    };

    // Update time immediately
    updateTime();

    // Set up interval to update time every second
    const timerId = setInterval(updateTime, 1000);

    // Clean up interval on component unmount
    return () => clearInterval(timerId);
  }, []);

  return (
    <div>
      {time ? (
        <p>Current time: {time}</p>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}
