"use client"

import React, { useState, useEffect, useRef } from "react";

export default function Home() {
  const [isActive, setIsActive] = useState(false);
  const [isPaused, setIsPaused] = useState(true);
  const [timeLeft, setTimeLeft] = useState(60); // Set initial time to 60 seconds
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (isActive && !isPaused) {
      timerRef.current = setInterval(() => {
        setTimeLeft((prevTime) => {
          if (prevTime <= 1) {
            clearInterval(timerRef.current!);
            setIsActive(false);
            setIsPaused(true);
            return 0;
          }
          return prevTime - 1;
        });
      }, 1000);
    } else {
      if (timerRef.current) clearInterval(timerRef.current);
    }

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isActive, isPaused]);

  const handleReset = (): void => {
    clearInterval(timerRef.current!);
    setIsActive(false);
    setIsPaused(true);
    setTimeLeft(60); // Reset to initial time
  };

  const handleStart = (): void => {
    setIsActive(true);
    setIsPaused(false);
  };

  const handlePause = (): void => {
    setIsPaused(true);
  };

  return (
    <div className="max-w-4xl mx-auto p-5">
      <h1 className="text-3xl font-bold text-center mb-8">Todo Timer App</h1>
      <div className="bg-white shadow-md rounded-lg p-6">
        <div className="text-4xl font-bold text-center mb-4">
          {timeLeft} seconds
        </div>
        <div className="flex justify-center space-x-4">
          {!isActive || isPaused ? (
            <button
              onClick={handleStart}
              className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded"
            >
              Start
            </button>
          ) : (
            <button
              onClick={handlePause}
              className="bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-2 px-4 rounded"
            >
              Pause
            </button>
          )}
          <button
            onClick={handleReset}
            className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded"
          >
            Reset
          </button>
        </div>
      </div>
    </div>
  );
}
