import React, { useContext, useEffect, useState } from 'react'
import './AlbumItem.css'
import { Link } from 'react-router-dom'
import { albumsData, assets } from '../../assets/assets'
import { PlayerContext } from '../../context/PlayerContext'
const AlbumItem = ({image,name,desc,id}) => {
  const {displayRef} = useContext(PlayerContext);
  const handleBg = () => {
    displayRef.current.style.backgroundColor = albumsData[id].bgColor;
  }
   return (
    <>
      <Link to={`/album/${id}`} onMouseEnter={handleBg} className='album-item'>
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

export default AlbumItem
