import React , {useContext, useEffect, useState} from 'react'
import './DisplayHome.css'
import { albumsData , artistsData, songsData } from '../../assets/assets'
import AlbumItem from '../../Components/AlbumItem/AlbumItem'
import ArtistItem from '../../Components/ArtistItem/ArtistItem'
import SongItem from '../../Components/SongItem/SongItem'
import { PlayerContext } from '../../context/PlayerContext'
import { useLocation } from 'react-router-dom'
import Loader from '../../Components/Loader/Loader'

const DisplayHome = () => {
    const [isLoading,setIsLoading] = useState(true);
    const location = useLocation();
    const isAlbum = location.pathname.includes("album");
    const {displayRef,setCurrAlbum} = useContext(PlayerContext); 
    const [activeTab,setActiveTab] = useState('all')

    useEffect(() => {
      if(!isAlbum) {
        setCurrAlbum(songsData)
      }
    },[location])

    useEffect(() => {
       setTimeout(() => {
        setIsLoading(false)
      },1000)
    },[])

  return (
    <>
    {isLoading ? (<Loader/>) : (<div className='display-home'>
        <div ref={displayRef} className="home-BgGradient"></div> 
        <div className="home-BgGradientSoft"></div>
        <div className="categories">
        <div className={`category ${activeTab == 'all' ? "category-active" : ""}`} onClick={() => setActiveTab('all')} >All</div>
        <div className={`category ${activeTab == 'music' ? "category-active" : ""}`} onClick={() => setActiveTab('music')}>Music</div>
        <div className={`category ${activeTab == 'artists' ? "category-active" : ""}`} onClick={() => setActiveTab('artists')}>Artists</div>
      </div>
      {activeTab === 'all' &&<div className="songs-box">
        <div className="songs">
         {songsData.map((item,index) => {
           return <SongItem key={index} name={item.name} desc={item.desc} id={item.id} image={item.image}/>
         })}
       </div>
     </div>} 
      { (activeTab === 'all' || activeTab === 'music') && <div className="albums-box">
      <h1>Made For Prince</h1>
      <div className="albums">
        {albumsData.slice(0,5).map((item,index) => {
          return <AlbumItem key={index} name={item.name} desc={item.desc} id={item.id} image= { item.image}/>
        })}
      </div>
      </div>}
      { (activeTab === 'all' || activeTab === 'artists') &&<div className="artists-box">
        <h1>Your Favourite Artists</h1>
        <div className="artists">
          {artistsData.map((item,index) => {
            return <ArtistItem key={index} name={item.name} desc={item.desc} id={item.id} image= { item.image} />
          })}
        </div>
      </div>}
       
    </div>) }
    </>  
  ) 
  
}

export default DisplayHome
