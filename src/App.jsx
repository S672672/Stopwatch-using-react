import React, { useState, useEffect } from 'react';

export default function App() {
  const [isRunning, setIsRunning] = useState(false);
  const [elapsedTime, setElapsedTime] = useState(0);

  useEffect(() => {
    let interval;

    if (isRunning) {
      interval = setInterval(() => {
        setElapsedTime((prevTime) => prevTime + 1);
      }, 1000);
    } else {
      clearInterval(interval);
    }

    return () => clearInterval(interval);
  }, [isRunning]);

  const startStopwatch = () => {
    setIsRunning(!isRunning);
  };

  const resetStopwatch = () => {
    setIsRunning(false);
    setElapsedTime(0);
  };

  const formatTime = (timeInSeconds) => {
    const minutes = Math.floor(timeInSeconds / 60);
    const seconds = timeInSeconds % 60;
    return `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
  }
  return (
    <div className="container mx-auto mt-8 p-4 bg-gray-200">
    <h1 className="text-3xl font-bold mb-4">Stopwatch</h1>
    <p className="text-2xl mb-4">{formatTime(elapsedTime)}</p>
    <button
      className="bg-blue-500 text-white px-4 py-2 mr-2 rounded"
      onClick={startStopwatch}
    >
      {isRunning ? 'Stop' : 'Start'}
    </button>
    <button
      className="bg-red-500 text-white px-4 py-2 rounded"
      onClick={resetStopwatch}
    >
      Reset
    </button>
  </div>
  )
}