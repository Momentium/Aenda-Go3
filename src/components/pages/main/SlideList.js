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
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  width: 100%;
  @media screen and (min-width: 481px){
    height: 233px; 
  }
  
  padding: 1.922em 0;
  box-sizing: border-box;

  background: ${({ theme }) => theme.colors.blue};

  overflow: hidden;
`;
