import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Slide from "./Slide";

const SlideList = ({ isOpen }) => {
  const [pauseIdx, setPauseIdx] = useState(-1);
  useEffect(() => {
    !isOpen && setPauseIdx(-1);
  }, [isOpen]);

  return (
    <StSlideCont>
      <Slide dir="left" dataIdx={0} pauseIdx={pauseIdx} setPauseIdx={setPauseIdx} />
      <Slide dir="right" dataIdx={1} pauseIdx={pauseIdx} setPauseIdx={setPauseIdx} />
      <Slide dir="left" dataIdx={2} pauseIdx={pauseIdx} setPauseIdx={setPauseIdx} />
      <Slide dir="right" dataIdx={3} pauseIdx={pauseIdx} setPauseIdx={setPauseIdx} />
    </StSlideCont>
  );
};
export default SlideList;

const StSlideCont = styled.div`
  ${({theme}) => theme.flex('space-between', '', 'column')}
  width: 100%;
  @media screen and (min-width: 481px) {
    padding: ${({ theme }) => theme.calcVW(60)} 0;
  }
  @media screen and (max-width: 480px) {
    padding: ${({ theme }) => theme.calcVW_M(35)} 0;
  }
  background: ${({ theme }) => theme.colors.blue};
  overflow: hidden;
`;
