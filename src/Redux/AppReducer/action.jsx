import * as types from "./actionTypes";
import axios from "axios";


const getMusicRecords=(params)=>dispatch=>{
    dispatch({type:types.GET_MUSIC_RECORD_REQUEST})
    return axios.get("http://localhost:8080/albums",params)
     .then(r=>{
        return dispatch({type:types.GET_MUSIC_RECORD_SUCCESS,payload:r.data})
     }) .catch((e)=>{
        dispatch({type:types.GET_MUSIC_RECORD_FAILURE})
     })
}

const updateMusicRecord=(id,payload)=>(dispatch)=>{
   dispatch({type:types.UPDATE_MUSIC_RECORD_REQUEST});
   return axios.patch(`http://localhost:8080/albums/${id}`,payload).then(r=> dispatch({type:types.UPDATE_MUSIC_RECORD_SUCCESS})).catch((e)=>({type:types.UPDATE_MUSIC_RECORD_FAILURE}));
}


export {getMusicRecords,updateMusicRecord}