import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom'
import { getMusicRecords } from '../Redux/AppReducer/action';

 const SingleMusicRecord = () => {
 const dispatch = useDispatch();
  const {id} = useParams();
  const musicRecords=useSelector(store=>store.AppReducer.musicRecords);
  const [currentMusicAlbum,setCurrentMusicAlbum]=useState({});
  
 useEffect(()=>{
  if(musicRecords.length===0){
    dispatch(getMusicRecords())
  }
 },[dispatch,musicRecords.length]);

  useEffect(()=>{
     if(id){
      const currentMusic=musicRecords.find((album)=>
      album.id===id);
      currentMusic && setCurrentMusicAlbum(currentMusic)
     }
  },[id,musicRecords])
   //console.log(currentMusicAlbum);
  return (
    <div>
        <h1>{currentMusicAlbum.name}</h1>
        <div>
          <img src={currentMusicAlbum.img} alt={currentMusicAlbum.name} />
          </div>
        <h1>{currentMusicAlbum.artist}</h1>
        <h1>{currentMusicAlbum.genre}</h1>
        <h1>{currentMusicAlbum.year}</h1>
        <Link to={`/music/${id}/edit`}>Edit</Link>
    </div>
  )
};

export default SingleMusicRecord;