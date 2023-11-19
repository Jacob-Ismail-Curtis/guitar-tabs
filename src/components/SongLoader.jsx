import React, { useState } from 'react';
import URLInput from './URLInput';
import SongDisplay from './SongDisplay';
import { formatChords, findInObject } from '../utils/SongParser';

const SongLoader = () => {
  const [uri, setUri] = useState('');
  const [songData, setSongData] = useState('');
  const [artist, setArtist] = useState('');
  const [song, setSong] = useState('');
  const [loading, setLoading] = useState(false);

  const corsProxyUrl = "http://localhost:8080/";

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
      <URLInput uri={uri} setUri={setUri} handleLoadSong={handleLoadSong} loading={loading} />
      <SongDisplay songData={songData} song={song} artist={artist} />
    </div>
  );
};

export default SongLoader;
