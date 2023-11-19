import React from 'react';

const URLInput = ({ uri, setUri, handleLoadSong, loading }) => {
  return (
    <div className="url-input-container flex justify-center items-center w-full px-4">
      <input
        type="text"
        value={uri}
        onChange={(e) => setUri(e.target.value)}
        placeholder="Enter Ultimate Guitar URL"
        className="p-2 border border-stone-900 rounded w-1/2"
      />
      <button
        onClick={handleLoadSong}
        className={`p-2 ml-2 ${loading ? 'bg-gray-500' : 'bg-stone-900'} text-white rounded`}
        disabled={loading}
      >
        {loading ? 'Loading...' : 'Load Song'}
      </button>
    </div>
  );
};

export default URLInput;
