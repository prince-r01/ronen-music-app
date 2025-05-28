import React, { useRef ,useEffect, useContext } from 'react'
import './DisplayAlbum.css'
import { useLocation, useParams } from 'react-router-dom'
import { albumsData, artistsData, assets, songsData } from '../../assets/assets';
import { PlayerContext } from '../../context/PlayerContext';
import playWaveSvg from '../../assets/playWave';
const DisplayAlbum = () => {

  const {id} = useParams();
  const location = useLocation();
  const pageAlbum = location.pathname.includes("album");
  const DisplayData =  pageAlbum ? albumsData[id] : artistsData[id] ;
  const songsList = DisplayData.songsList;

  const displayRef = useRef();
  const displayRef2 = useRef();

  const isAlbum = pageAlbum || location.pathname.includes("artist");
  const albumId = isAlbum ? location.pathname.slice(-1) : "";
  const bgColor = pageAlbum ? albumsData[Number(albumId)].bgColor : artistsData[Number(albumId)].bgColor;
  const {setCurrAlbum,playWithId,track,playStatus} = useContext(PlayerContext); 

  useEffect(()=> {
    if (isAlbum ) {
      displayRef.current.style.backgroundColor = bgColor;
      displayRef2.current.style.backgroundColor = bgColor;
      setCurrAlbum(songsList);
    } 
    else{
      setCurrAlbum(songsData);
    }

  },[])

  return (
    <div className="display-album">
      <div ref = {displayRef} className="playlist-gradientBg"></div>
      <div ref = {displayRef2} className="playlist-gradientBgSoft"></div>
    <div className='album'>
      <img src={DisplayData.image} alt="" className='album-cover'/>
      <div className="album-details">
        <h3>PLAYLIST</h3>
        <h1>{DisplayData.name}</h1>
        <p>{DisplayData.desc}</p>
      </div>
    </div>
    <div className="songs-playlist">
    <div className="layout">
      <p className="serial-no">#</p>
      <p className="titlle">TITLE</p>
     <img className= "clock-icon " src={assets.clock_icon} alt="" />
    </div>
    <hr />
    {
        songsList.map((item,index) => (
        <div onClick={ () => playWithId(item.id)}
          key={index}className={`song ${
            playStatus ? (item.name === track.name ? "active-trackSong" : "") : ""
          }`}>
          <p className='active-trackAnimation'><b> {playStatus ? (item.name === track.name ? playWaveSvg : index + 1 ) : index + 1}</b> </p>
          <div className='song-details'>
          <img src={item.image} alt="" />
          <span>
          <p className='song-name'>{item.name}</p>
          <p className = 'artist-name'>{item.artist}</p>
          </span>
          </div>
          <p className='duration'>{item.duration}</p>
        </div>
      ))
    }
     </div>
    </div>
  )
}

export default DisplayAlbum
