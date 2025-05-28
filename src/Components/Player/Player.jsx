import React, { useContext, useState  } from "react";
import "./Player.css";
import { assets } from "../../assets/assets";
import { PlayerContext } from "../../context/PlayerContext";
import NavigationBar from "../NavigationBar/NavigationBar";
const Player = () => {
  
  const [like , setLike] = useState(false);
  const [loop, setLoop] = useState(false);
  const [shuffle, setShuffle] = useState(false);
  const [miniPlayer, setMiniPlayer] = useState(false);
  const [playVideo, setplayVideo] = useState(false);
  const [queue, setQueue]  = useState(false);
  const {
    mute,
    seekBar,
    seekBg,
    volumeBar,
    volumeBg,
    playStatus,
    play,
    pause,
    track,
    time,
    previous,
    next,
    seekSong,
    seekVolume,
    muteVolume
  } = useContext(PlayerContext);
  return (
    <div className="player">
      <div className="current-song">
        <img src={track.image} className="trackPoster" alt="" />
        <div>
          <p>{track.name}</p>
          <p className="song-desc">{track.artist}</p>
        </div>
        
        <svg className= {`like-icon ${like ? 'active-like' : ''}`}  onClick={() => {setLike(!like)}}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          width="21"
          height="21"
          color="#fffff"
          fill="none"
        >
          <path
            d="M10.4107 19.9677C7.58942 17.858 2 13.0348 2 8.69444C2 5.82563 4.10526 3.5 7 3.5C8.5 3.5 10 4 12 6C14 4 15.5 3.5 17 3.5C19.8947 3.5 22 5.82563 22 8.69444C22 13.0348 16.4106 17.858 13.5893 19.9677C12.6399 20.6776 11.3601 20.6776 10.4107 19.9677Z"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        <img src={assets.mini_player_icon} className={`miniPlayer-icon icon ${miniPlayer ? 'active-icon' : ''}`}  onClick={() => {setMiniPlayer(!miniPlayer)}} alt="" />
      </div>
      <div className="song-controls">
        <div className="control-icons">
          <img
            src={assets.shuffle_icon}
            alt=""
            className={`shuffle-icon icon ${shuffle ? 'active-icon' : ''}`} 
             onClick={() => {setShuffle(!shuffle)}}
          />
          <img
            onClick={previous}
            src={assets.prev_icon}
            alt=""
            className="prev-icon "
          />
          <img
            onClick={playStatus ? pause : play}
            src={playStatus ? assets.pause_icon : assets.play_icon}
            alt=""
            className="play-icon"
          />
          <img
            onClick={next}
            src={assets.next_icon}
            alt=""
            className="next-icon "
          />
          <img
            src={assets.loop_icon}
            alt=""
            className={`loop-icon icon ${loop ? 'active-icon' : ''}`}  onClick={() => {setLoop(!loop)}}
          />
        </div>
        <div className="song-dur-seek">
          <p>
            {time.currentTime.minute} : {time.currentTime.second}{" "}
          </p>
          <div ref={seekBg} onClick={seekSong} className="seekbar">
            <hr ref={seekBar} />
          </div>
          <p>
            {time.totalTime.minute} : {time.totalTime.second}
          </p>
        </div>
      </div>
      <div className="more-controls">
        <img src={assets.plays_icon} className={`playVideo-icon icon ${playVideo ? 'active-icon' : ''}`}  onClick={() => {setplayVideo(!playVideo)}} />
        <img src={assets.queue_icon} className={`queue-icon icon ${queue ? 'active-icon' : ''}`}  onClick={() => {setQueue(!queue)}} />
        <img src={mute ? assets.mute_icon : assets.volume_icon} onClick={muteVolume} className="volume-icon icon" alt="" />
        <div ref={volumeBg} onClick={seekVolume} className="volume-seek">
            <hr ref={volumeBar} />
        </div>
      </div>
      <NavigationBar/>
    </div>
  );
};

export default Player;
