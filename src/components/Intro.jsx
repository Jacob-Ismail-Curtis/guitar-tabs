import React from 'react';
import Navbar from './Navbar';

function Intro() {
  return (
    <div className="flex items-center justify-center flex-col text-center py-5">
      <Navbar />
      <h1 className="text-4xl md:text-7xl mb-1 md:mb-3 font-bold">Guitar Tabs</h1>
      <p className="text-base md:text-2xl mb-3 font-medium">Play along to your favourite songs.</p>
    </div>
  );
}

export default Intro;
