import React, { useContext } from "react";
import "./SongItem.css";
import { PlayerContext } from "../../context/PlayerContext";
import playWaveSvg from "../../assets/playWave";
const SongItem = ({ image, name, id }) => {
  const { playWithId, track, playStatus } = useContext(PlayerContext);
  return (
    <>
      <div
        onClick={() => playWithId(id)}
        className={`song-item ${
          playStatus ? (name === track.name ? "active-track" : "") : ""
        }`}
      >
         <img src={image} className="song-cover" alt="" />
         <p className="song-name">{name}</p>
        <div className="song-playing">
          {playWaveSvg}
         </div>
      </div>
    </>
  );
};

export default SongItem;
