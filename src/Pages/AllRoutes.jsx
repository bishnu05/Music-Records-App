import React from 'react'
import {Routes,Route} from "react-router-dom";
import { ReqAuth } from '../components/ReqAuth';
import EditMusicRecords from './EditMusicRecords';
import HomePage from './HomePage';
import {Login} from './Login';
import SingleMusicRecords from './SingleMusicRecords';

export const AllRoutes = () => {
  return (
    <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/music/:id" element={<ReqAuth>
        <SingleMusicRecords/> </ReqAuth>} />
        <Route path="/music/:id/edit" element={<EditMusicRecords/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="*" element={<h3>Page Not Found</h3>} />
    </Routes>
  )
}
