import React, { useContext } from 'react';
import styled, { ThemeContext } from 'styled-components';
import { programData } from '../../../../data/data';
import Program from './Program';
import ProgramPage from './ProgramPage';

const ProgramList = () => {
  const { setPopSlide, setSlidePage } = useContext(ThemeContext);
  const openPage = (e) => {
    const _curTaget = e.currentTarget
    const _curMBTI = _curTaget.className.split(" ")[2];
    const _curTitle = _curTaget.childNodes[1].textContent
    setSlidePage(<ProgramPage mbti={_curMBTI} title={_curTitle} closePage={() => setPopSlide(false)}/>);
    setPopSlide(true);
  }

  const dataList = programData.map((el, idx) => 
    <Program key={idx} data={el} mbti={el.mbti} title={el.title} openPage={openPage}/>
  )

  return (
    <StProgramCont>
      {dataList}
    </StProgramCont>
  );
}
export default ProgramList;

const StProgramCont = styled.div`
  display: grid;
  justify-items: center;
  @media screen and (min-width: 481px) {
    grid-template-columns: repeat(4, 1fr);
    /* grid-template-rows: repeat(4, 1fr); */
    row-gap: ${({theme}) => theme.calcVW(130)};
    column-gap: ${({theme}) => theme.calcVW(130)};
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