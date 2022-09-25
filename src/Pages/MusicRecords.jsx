import React from 'react'
import { useEffect } from 'react';
import {useDispatch,useSelector} from "react-redux"
import {Link, useLocation,useSearchParams} from "react-router-dom";
import { getMusicRecords} from '../Redux/AppReducer/action';
import styled from 'styled-components';
const MusicRecords = () => {
       const dispatch=useDispatch()
       const musicRecords=useSelector(store=>store.AppReducer.musicRecords)
       const [searchParams]=useSearchParams()
       const location = useLocation()
            
      useEffect(()=>{
        if(location||musicRecords.length===0){
          const sortBy= searchParams.get("sortBy")
          const queryParams={
            params:{
              genre:searchParams.getAll("genre"),
              _sort:sortBy && "year",
              _order:"sortBy",
            }
          };
          dispatch(getMusicRecords(queryParams))
        }
      },[location.search])
    console.log(location)
  return (
    <>
       {musicRecords.length>0 && musicRecords.map((album)=>{
          return (
            <MusicRecordsWrapper key={album.id}>
              <Link to = {`/music/${album.id}`}>
                <div>{album.name}</div>
                <div><img src={album.img} alt={album.name} /></div>
                <div>{album.genre}</div>
                <div>{album.year}</div>
                </Link>
            </MusicRecordsWrapper>
          )
        })}
    </>
  )
}

export default MusicRecords;

const MusicRecordsWrapper=styled.div`
      width:300px;
      border:1px solid teal;
`;