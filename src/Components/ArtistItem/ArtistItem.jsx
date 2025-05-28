import React, { useContext} from 'react'
import './ArtistItem.css'
import { Link } from 'react-router-dom'
import {  artistsData, assets } from '../../assets/assets'
import { PlayerContext } from '../../context/PlayerContext'
const ArtistItem = ({image,name,desc,id}) => {
  const {displayRef} = useContext(PlayerContext);
  const handleBg = () => {
    displayRef.current.style.backgroundColor = artistsData[id].bgColor;
  }
   return (
    <>
      <Link to={`/ronen-music-app/artist/${id}`} onMouseEnter={handleBg} className='artist-item'>
        <div className="hoverableplay-icon">
          <img src={assets.play_icon} alt="" />
        </div>
        <img src={image} className= "album-cover" alt="" />
        <p className='album-name'>{name}</p>
        <p className='album-desc'>{desc}</p>
      </Link>
    </>
  )
}

export default ArtistItem

