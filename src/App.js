
import React, { useState } from 'react';
import { Link, Route, Routes } from 'react-router-dom';

import HomePage from './HomePage';

// import App from './0-guesture';
import IndexPage from './IndexPage';
import MusicPlayer from './MusicPlayer'
import MusicList from './MusicList'
import UseStateExample from './0-useState';
import UseStateExample1 from './0-useState1';
import NotFound from './NotFound';

function App() {
  return (
    <>
      <nav>
        <ul>
          <li> <Link to='/'>index</Link> </li>
          <li> <Link to='/home'>Home</Link> </li>
          <li> <Link to='/music-list'>Music List</Link> </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={ <IndexPage /> }/>
        <Route path="/home" element={ <HomePage /> }/>
        <Route path="/music-list/" element={ <MusicList /> }/>
        <Route path="/musicplayer/:music_id" element={ <MusicPlayer /> }/>
        <Route path="/useStateexample" element={ <UseStateExample /> }/>
        <Route path="/useStateexample1" element={ <UseStateExample1 /> }/>
        <Route path='*' element= { <NotFound /> } />
      </Routes>
    </>

  );
}

export default App;
