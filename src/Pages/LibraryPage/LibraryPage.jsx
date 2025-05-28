import React from 'react'
import './LibraryPage.css'
import { albumsData, artistsData, assets } from "../../assets/assets";
import { Link } from "react-router-dom";
const LibraryPage = () => {
  return (
    <div className='library-page'>
      <div className="library-icon ">
        <img src={assets.stack_icon} alt="" />
        <span>Your Library</span>
        <img src={assets.plus_icon} alt="" className="plus-icon" />
      </div>
      <div className="folders">
        {artistsData.map((item, index ) => {
         return (
          <Link to={`/ronen-music-app/artist/${item.id}`} key={index} className="artist-folder folder">
          <img src={item.image} alt="" />
          <span className= 'playlistName'>{item.name}</span>
        </Link>
          );
        })}
        <div className="liked-folder folder">
          <img src={assets.liked_cover} alt="" />
          <span className="playlistName">Liked Songs</span>
        </div>
        {albumsData.slice(3).map((item, index) => {
          return (
          <Link to={`/ronen-music-app/album/${item.id}`} key={index} className="albums-folder folder">
          <img src={item.image} alt="" />
          <span className= 'playlistName'>{item.name}</span>
        </Link>
          );
        })}
      </div>
    </div>
  );
};

export default LibraryPage
