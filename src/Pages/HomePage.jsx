import React from 'react'
import FilterSort from '../components/FilterSort';
import MusicRecords from './MusicRecords';
import styled from 'styled-components';
const HomePage = () => {
  return (
    <HomepageWrapper>
      <FilterSortWrapper>
      <FilterSort/>
      </FilterSortWrapper>
      <MusicRecordsWrapper>
      <MusicRecords/>
      </MusicRecordsWrapper>
    </HomepageWrapper>
  )
}

export default HomePage;


const HomepageWrapper=styled.div`
       display:flex;
       height:auto;
`;

const FilterSortWrapper=styled.div`
     width:200px;
     border:1px solid teal;
`;

const MusicRecordsWrapper=styled.div`
      width:100%;
      border:1px solid blue;
      display:grid;
      grid-template-columns:repeat(auto-fit,minmax(300px,max-content));
      justify-content:center;
      grid-gap:10px;
`;