import logo from './logo.svg';
import './App.css';

import React, { useState } from 'react';

function App() {

  const [index, setIndex] = useState(0);
  const [theme, setTheme] = useState('theme');

  const [isPlaying, setIsPlaying] = useState(true);
  const togglePlay = () => {
    setIsPlaying(!isPlaying);
  };


  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>
          Happy Birthday!  - River
        </h1>

        <p>本想给你一个surprise, 奈何技术不到家加上在家的两天荒废了，只让上面的‘蛋糕’转动了起来，内容可视化我还要一些时间！</p>
        
        <p>2024年的生日不求快乐，祝愿你能自由！</p>

        <div>
          <span>先来听听生日歌吧：↓↓↓↓↓↓</span>
          <br></br>
          <br></br>
          <audio src="http://onehut.site:8081/static/audio/happybirth-day-song.mp3" controls={isPlaying} />
        </div>

      </header>
    </div>
  );
}

export default App;
