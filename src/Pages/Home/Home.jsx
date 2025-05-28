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
          <Route path='/' element={<DisplayHome />} />
          <Route path='/album/:id' element= {<DisplayAlbum/>}/>
          <Route path='/artist/:id' element= {<DisplayAlbum/>}/>
          <Route path='/search' element= {<Search/>}></Route>
          <Route path='/library' element= {<LibraryPage/>}></Route>
    </Routes>
    </div>
  )
}

export default Home
