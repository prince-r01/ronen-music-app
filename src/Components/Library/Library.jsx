import React, { useState } from "react";
import "./Library.css";
import { albumsData, artistsData, assets } from "../../assets/assets";
import { Link } from "react-router-dom";
const Library = () => {
  const [librarybar, setLibaryBar] = useState(true);
  return (
    <div className={`library ${librarybar ? "small-bar" : ""}`}>
      <div className="library-icon " onClick={() => setLibaryBar(!librarybar)}>
        <img src={assets.stack_icon} alt="" className="icon" />
        <span>Your Library</span>
      </div>
      <div className="music-icon">
        <img src={assets.music_note} alt="" className="icon" />
      </div>

      <div className="folders">
        {artistsData.slice(0,2).map((item, index ) => {
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
          <Link to={`/ronen-music-app/album/${item.id}`} key={index} className=" folder">
          <img src={item.image} alt="" />
          <span className= 'playlistName'>{item.name}</span>
        </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Library;
