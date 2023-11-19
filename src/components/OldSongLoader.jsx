import React, { useState } from 'react';

const SongLoader = () => {
  const [uri, setUri] = useState('');
  const [songData, setSongData] = useState('');
  const [artist, setArtist] = useState('');
  const [song, setSong] = useState('');
  const [loading, setLoading] = useState(false);

  const corsProxyUrl = "http://localhost:8080/";

  const formatChords = (rawData) => {
    // Replace [tab] and [/tab] tags with appropriate HTML elements
    let formattedData = rawData.replace(/\[tab\]/g, '<div class="tab font-mono whitespace-pre text-gray-700">').replace(/\[\/tab\]/g, '</div>');
  
    // Process [ch] and [/ch] tags within the formatted data
    formattedData = formattedData.split('\n').map(line => {
      if (line.includes('[ch]')) {
        // Replace chord tags and wrap chords with a span
        return line.replace(/\[ch\]/g, '<span class="chord font-bold text-gray-500">').replace(/\[\/ch\]/g, '</span>');
      } else {
        // Regular line (lyrics or other)
        return `<span class="lyrics block">${line}</span>`;
      }
    }).join('<br/>');
  
    return formattedData;
  };
  

  const findInObject = (obj, key) => {
    let objects = [];
    for (const i in obj) {
      if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;
      if (typeof obj[i] === 'object') {
        objects = objects.concat(findInObject(obj[i], key));
      } else if (i === key) {
        objects.push(obj[i]);
      }
    }
    return objects;
  };

  const handleLoadSong = () => {
    if (!uri) {
      alert('Please enter a URL');
      return;
    }

    setLoading(true);
    fetch(`${corsProxyUrl}${uri}`)
      .then(response => response.text())
      .then(text => {
        const div = document.createElement('div');
        div.innerHTML = text;

        const [store] = div.getElementsByClassName('js-store');
        const storeJson = store.getAttribute('data-content');
        const storeData = JSON.parse(storeJson);

        const [parsedSongName] = findInObject(storeData, 'song_name');
        const [parsedArtistName] = findInObject(storeData, 'artist_name');
        const [parsedChords] = findInObject(storeData, 'content');

        setArtist(parsedArtistName);
        setSong(parsedSongName);
        setSongData(formatChords(parsedChords));
      })
      .catch(error => {
        console.error('Fetch error:', error);
        alert('There was an error fetching the song data.');
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <div className="song-loader-container">
      {/* URL Input and Load Button */}
      <div className="url-input-container flex justify-center items-center">
        <input
          type="text"
          value={uri}
          onChange={(e) => setUri(e.target.value)}
          placeholder="Enter Ultimate Guitar URL"
          className="p-2 border border-stone-900 rounded"
        />
        <button
          onClick={handleLoadSong}
          className={`p-2 ml-2 ${loading ? 'bg-gray-500' : 'bg-stone-900'} text-white rounded`}
          disabled={loading}
        >
          {loading ? 'Loading...' : 'Load Song'}
        </button>
      </div>

      {/* Song Data Display */}
      {songData && (
        <div className="song-data mt-4 px-10">
          <h2>{song} by {artist}</h2>
          <div dangerouslySetInnerHTML={{ __html: songData }}></div>
        </div>
      )}
    </div>
  );
};

export default SongLoader;
