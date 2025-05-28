import React from 'react'
import './Home.css'
import { Routes,Route,  } from 'react-router-dom'
import DisplayHome from '../DisplayHome/DisplayHome'
import DisplayAlbum from '../DisplayAlbum/DisplayAlbum';
import { albumsData } from '../../assets/assets';
import Search from '../Search/Search';
import LibraryPage from '../LibraryPage/LibraryPage';
const Home = () => {


  return (
    <div className='home'>
    <Routes>
          <Route path='/ronen-music-app' element={<DisplayHome />} />
          <Route path='/ronen-music-app/album/:id' element= {<DisplayAlbum/>}/>
          <Route path='/ronen-music-app/artist/:id' element= {<DisplayAlbum/>}/>
          <Route path='/ronen-music-app/search' element= {<Search/>}></Route>
          <Route path='/ronen-music-app/library' element= {<LibraryPage/>}></Route>
    </Routes>
    </div>
  )
}

export default Home
