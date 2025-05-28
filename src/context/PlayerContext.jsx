import { createContext, useRef, useState ,useEffect} from "react";
import { songsData } from "../assets/assets";


export const PlayerContext = createContext();

const PlayerContextProvider = (props) => {

    const audioRef = useRef();
    const seekBg = useRef();
    const seekBar = useRef();
    const volumeBg = useRef();
    const volumeBar = useRef();
    const displayRef = useRef(null);
    const [mute,setMute] = useState(false);
    const [currAlbum,setCurrAlbum] = useState(songsData);
    const [track,setTrack] = useState(songsData[0]);
    const [playStatus,setPlayStatus] = useState(false);
    const [time,setTime] = useState({
        currentTime:{
            second:0,
            minute:0
        },
        totalTime: {
            second: 0,
            minute: 0
        }
    })

    const play = () => {
        audioRef.current.play();
        setPlayStatus(true);
    }

    const pause = () => {
        audioRef.current.pause();
        setPlayStatus(false);
    }

    const playWithId = async (id) => {
        await setTrack(currAlbum[id]);
        await audioRef.current.play();
        setPlayStatus(true);
    }


    const previous = async () => {
        if(track.id>0) {
            await setTrack(currAlbum[track.id-1]);
            await audioRef.current.play();
            setPlayStatus(true);
        }
    }

    const next = async () => {
        if(track.id < currAlbum.length-1) {
            await setTrack(currAlbum[track.id+1]);
            await audioRef.current.play();
            setPlayStatus(true);
        }
    }

    const seekSong = async (event) => {
       audioRef.current.currentTime = ((event.nativeEvent.offsetX / seekBg.current.offsetWidth) * audioRef.current.duration) 
    }

    const seekVolume = async (event) => {
        audioRef.current.volume = event.nativeEvent.offsetX / 100 ;
        volumeBar.current.style.width = (Math.floor(audioRef.current.volume * 100))+"%" ;
        if( audioRef.current.volume === 0 ){
            setMute(true);
        }else {
            setMute(false)
        }
    }
    const muteVolume = () => {
        if(mute === false){
        setMute(true);
        audioRef.current.volume = 0 ;
        }else {
            setMute(false);
            audioRef.current.volume = 0.7 ;
        }
        volumeBar.current.style.width = (Math.floor(audioRef.current.volume * 100))+"%" ; 
    }

    useEffect (() => {
        setTimeout(() => {
            audioRef.current.ontimeupdate = () => {
                seekBar.current.style.width = (Math.floor(audioRef.current.currentTime/audioRef.current.duration*100))+"%"
                setTime({
                    currentTime:{
                    second:Math.floor(audioRef.current.currentTime%60),
                    minute:Math.floor(audioRef.current.currentTime/60)
                },
                totalTime: {
                    second:Math.floor(audioRef.current.duration%60),
                    minute:Math.floor(audioRef.current.duration/60)
                }})
            }
        },1000);
    },[audioRef])
    const contextValue = {
        audioRef,
        seekBg,
        volumeBar,
        volumeBg,
        displayRef,
        seekBar,
        mute,
        setMute,
        track,
        setTrack,
        currAlbum,
        setCurrAlbum,
        playStatus,setPlayStatus,
        time,setTime,
        play,
        pause,
        playWithId,
        previous,
        next,
        muteVolume,
        seekSong,
        seekVolume

    }
    return (
        <PlayerContext.Provider value={contextValue}>
            {props.children}
        </PlayerContext.Provider>
    )
}

export default PlayerContextProvider