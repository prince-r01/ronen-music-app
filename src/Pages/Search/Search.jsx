import React from 'react'
import './Search.css'
import BrowseAlbum from '../../Components/BrowseAlbum/BrowseAlbum'
import { assets } from '../../assets/assets'
const Search = () => {
  return (
    <div className='searchPage'>
        <div className="searchPage-bar">
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width="24"
            height="24"
            color="#000"
            fill="none"
          >
            <path
              d="M17 17L21 21"
              stroke="#000"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></path>
            <path
              d="M19 11C19 6.58172 15.4183 3 11 3C6.58172 3 3 6.58172 3 11C3 15.4183 6.58172 19 11 19C15.4183 19 19 15.4183 19 11Z"
              stroke="#000"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></path>
          </svg>
            <input type="text" placeholder='Artists, songs or podcasts' id='search-bar' />
        </div>
      <h2>Browse all</h2>
      <div className="playlist-container">
        <BrowseAlbum bg = "#509bf5" name= "Made For You" image={assets.b_img1}/>
        <BrowseAlbum bg = "#eb1e32" name= "Hindi" image={assets.b_img2}/>
        <BrowseAlbum bg = "#f59b23" name= "Punjabi" image={assets.b_img3}/>
        <BrowseAlbum bg= "#c3f0c8" name= "Indie" image= {assets.b_img4}/>
        <BrowseAlbum bg="#4b917d" name= "Love" image={assets.b_img5} /> 
      </div>
    </div>
  )
}

export default Search
