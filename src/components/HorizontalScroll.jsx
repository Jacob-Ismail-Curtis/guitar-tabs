import React, { useState, useEffect } from 'react';
import LyricsDisplay from './LyricsDisplay';
import ControlPanel from './ControlPanel';

const HorizontalScroll = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(window.innerWidth);
  const dummyLyrics = ["It'll be fine by dusk light I'm telling you baby", "These things eat at your bones and drive your young mind crazy", "But when you place your head between my collar and jaw", "I don't know much but there's no weight at all"];

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
      <LyricsDisplay lyrics={dummyLyrics} scrollPosition={scrollPosition} />
      <ControlPanel handlePlayPause={handlePlayPause} onRestart={handleRestart} isPlaying={isPlaying} />
    </div>
  );
};

export default HorizontalScroll;
