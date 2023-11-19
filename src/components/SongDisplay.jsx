import React from 'react';

const SongDisplay = ({ songData, song, artist }) => {
  if (!songData) return null;

  return (
    <div className="song-data mt-4 px-20">
      <h2 className="text-2xl font-bold text-gray-800">{song}</h2>
      <p className="text-xl text-gray-600 mb-4">by {artist}</p>
      <div dangerouslySetInnerHTML={{ __html: songData }}></div>
    </div>
  );
};

export default SongDisplay;
