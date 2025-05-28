import React from 'react'
import './BrowseAlbum.css'
const BrowseAlbum = ({bg,name,image}) => {
  return (
      <div className="browse-Album" style={{backgroundColor: bg}}>
        <h2>{name}</h2>
        <img src={image} alt="" />
      </div>
  )
}

export default BrowseAlbum
