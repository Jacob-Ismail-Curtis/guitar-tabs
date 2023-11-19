import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay, faPause, faRedo } from '@fortawesome/free-solid-svg-icons';


const ControlPanel = ({ handlePlayPause, onRestart, isPlaying }) => {
  return (
    <div className="control-panel flex justify-center items-center space-x-4">
      <button onClick={handlePlayPause} className="p-2 border rounded">
        {isPlaying ? (
          <FontAwesomeIcon icon={faPause} />
        ) : (
          <FontAwesomeIcon icon={faPlay} />
        )}
      </button>
      <button onClick={onRestart} className="p-2 border rounded">
        <FontAwesomeIcon icon={faRedo} />
      </button>
    </div>
  );
};

export default ControlPanel;
