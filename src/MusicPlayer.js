import React, { useState } from 'react';
import { useParams } from 'react-router-dom';

const MusicPlayer = () => {
  const { music_id } = useParams()
  const [isPlaying, setIsPlaying] = useState(false);

  const togglePlay = () => {
    setIsPlaying(!isPlaying);
  };

  return (
    <div>
      <p> music_id {music_id} </p>
      <audio src="http://onehut.site:8081/static/audio/happybirth-day-song.mp3" controls={isPlaying} />
      <button onClick={togglePlay}>{isPlaying ? 'Pause' : 'Play'}</button>
    </div>
  );
};

export default MusicPlayer;