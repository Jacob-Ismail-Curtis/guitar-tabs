import React, { useState, useEffect } from 'react';
import LyricsDisplay from './LyricsDisplay';
import ControlPanel from './ControlPanel';

const HorizontalScroll = ({lyrics}) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(window.innerWidth);

  useEffect(() => {
    let interval;
    if (isPlaying) {
      interval = setInterval(() => {
        setScrollPosition(prev => prev - 1); // Adjust the value '-1' to control the speed
      }, 5); // Adjust the interval for smoother or faster animation
    } else if (!isPlaying && interval) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [isPlaying]);

  const handlePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  const handleRestart = () => {
    setIsPlaying(false);
    setScrollPosition(window.innerWidth);
  };

  return (
    <div className="horizontal-scroll-container ">
      <LyricsDisplay songLines={lyrics} scrollPosition={scrollPosition} />
      <ControlPanel handlePlayPause={handlePlayPause} onRestart={handleRestart} isPlaying={isPlaying} />
    </div>
  );
};

export default HorizontalScroll;
