import React, { useContext } from 'react'
import './App.css'
import Navbar from './Components/Navbar/Navbar'
import Home from './Pages/Home/Home'
import Library from './Components/Library/Library'
import Player from './Components/Player/Player'
import { PlayerContext } from './context/PlayerContext'
const App = () => {

  const {audioRef,track} = useContext(PlayerContext)
  return (
    <div>
      <Navbar/>
      <div className="content">
      <Library/>
      <Home/>
      </div>
      <Player/>
      <audio ref={audioRef} preload='auto' src={track.file}></audio>
    </div>
  )
}

export default App
