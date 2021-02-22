import React, { useState } from 'react';
import styled from 'styled-components';
import { Slide } from '@material-ui/core';
import { artistData } from '../../../../data/data';
import Artist from './Artist';
import ArtistPage from './ArtistPage';

const ArtistList = () => {
  const [popSlide, setPopSlide] = useState(false);
  const [curIdx, setCurIdx] = useState("0");
  const openPage = (e) => {
    setPopSlide(true);
    const _curTaget = e.currentTarget
    const _curIdx = _curTaget.className.split(" ")[2];
    setCurIdx(_curIdx);
  }
  const closePage = () => {
    setPopSlide(false);
  }

  const dataList = artistData.map((el, idx) => 
    <Artist key={idx} _idx={idx} data={el} openPage={openPage}/>
  )

  return (
    <>
      <StProgramCont>
        {dataList}
      </StProgramCont>

      <Slide in={popSlide} direction="right">
        <StPageCont>
          <ArtistPage _idx={curIdx} closePage={closePage}/>
        </StPageCont>
      </Slide>
    </>
  );
}
export default ArtistList;

const StProgramCont = styled.div`
  display: grid;
  justify-items: center;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(4, 1fr);
  row-gap: 7.3vw;
  column-gap: 7.3vw;
  padding: 7.3vw 0;

  @media screen and (max-width: 480px) {
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(8, 1fr);
    row-gap: 45px;
    padding: 45px 0;
  }
`;

const StPageCont = styled.div`
  position: fixed;
  z-index: 300;
  top: 0;
  left: 0;

  width: ${ ({ theme }) => `${theme.SW}px` };;
  height:${ ({ theme }) => `${theme.SH}px` };;

  overflow: scroll;
  -ms-overflow-style: none;
  &::-webkit-scrollbar {
    display: none;
  }
`;