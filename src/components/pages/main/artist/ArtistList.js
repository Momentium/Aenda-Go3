import React, { useContext } from 'react';
import styled, { ThemeContext } from 'styled-components';
import { artistData } from '../../../../data/data';
import Artist from './Artist';
import ArtistPage from './ArtistPage';

const ArtistList = () => {
  const { setPopSlide, setSlidePage } = useContext(ThemeContext);
  const openPage = (e) => {
    const _curTaget = e.currentTarget
    const _curIdx = _curTaget.className.split(" ")[2];
    setSlidePage( <ArtistPage _idx={_curIdx} closePage={() => setPopSlide(false)}/>);
    setPopSlide(true);
  }

  const dataList = artistData.map((el, idx) => 
    <Artist key={idx} _idx={idx} data={el} openPage={openPage}/>
  )

  return (
    <StProgramCont>
      {dataList}
    </StProgramCont>
  );
}
export default ArtistList;

const StProgramCont = styled.div`
  display: grid;
  justify-items: center;
  @media screen and (min-width: 481px) {
    grid-template-columns: repeat(4, 1fr);
    /* grid-template-rows: repeat(4, 1fr); */
    row-gap: ${({theme}) => theme.calcVW(126)};
    column-gap: ${({theme}) => theme.calcVW(126)};
    padding: ${({theme}) => theme.calcVW(130)} 0;
    /* row-gap: 7.3vw;
    column-gap: 7.3vw;
    padding: 7.3vw 0; */
  }

  @media screen and (max-width: 480px) {
    grid-template-columns: repeat(2, 1fr);
    row-gap: ${({theme}) => theme.calcVW_M(53)};
    column-gap: ${({theme}) => theme.calcVW_M(35)};
    padding: ${({theme}) => theme.calcVW_M(66)} 0;
  }
`;