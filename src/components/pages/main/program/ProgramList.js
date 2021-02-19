import React, { useState } from 'react';
import styled from 'styled-components';
import { Slide } from '@material-ui/core';
import { programData } from '../../../../data/data';
import Program from './Program';
import ProgramPage from './ProgramPage';

const ProgramList = () => {
  const [popSlide, setPopSlide] = useState(false);
  const [curMBTI, setCurMBTI] = useState("INFJ");
  const [curTitle, setCurTitle] = useState("");
  const openPage = (e) => {
    setPopSlide(true);
    const _curTaget = e.currentTarget
    const _curMBTI = _curTaget.className.split(" ")[2];
    const _curTitle = _curTaget.childNodes[1].textContent
    setCurMBTI(_curMBTI);
    setCurTitle(_curTitle);
  }
  const closePage = () => {
    setPopSlide(false);
  }

  const dataList = programData.map((el, idx) => 
    <Program key={idx} data={el} mbti={el.mbti} title={el.title} openPage={openPage}/>
  )

  return (
    <>
      <StProgramCont>
        {dataList}
      </StProgramCont>

      <Slide in={popSlide} direction="right">
        <StPageCont>
          <ProgramPage mbti={curMBTI} title={curTitle} closePage={closePage}/>
        </StPageCont>
      </Slide>
    </>
  );
}
export default ProgramList;

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
    row-gap: 48px;
    padding: 48px 0;
  }
`;

const StPageCont = styled.div`
  position: fixed;
  z-index: 200;
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