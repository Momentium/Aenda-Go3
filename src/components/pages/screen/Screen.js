import React, { useState, } from 'react';
import styled, { css } from 'styled-components';
import Player from './Player';

const Screen = ({ SW, popState }) => {
  const [curPage, setCurPage] = useState(0);
  const toLeftPage = () => {
    setCurPage(curPage - 1);
  }
  const toRightPage = () => {
    setCurPage(curPage + 1);
  }

  return (
    <StScreenCont>
      {
        curPage !== 0 && 
        <StArrowWrap dir={"left"} onClick={toLeftPage}>
          <img src="assets/icons/vidArrow.svg" alt="arrow-logo"/>
        </StArrowWrap>
      }
      {
        curPage !== 1 &&
        <StArrowWrap dir={"right"} onClick={toRightPage}>
          <img src="assets/icons/vidArrow.svg" alt="arrow-logo"/>
        </StArrowWrap>
      }
      
      <StPlayerCont curPage={curPage}>
        <Player
          vidUrl={"https://www.youtube.com/embed/hvh7VYctIqo"}
          SW={SW}
          popState={popState}
          pageState={curPage === 0}
        />
        <Player
          vidUrl={"https://www.youtube.com/embed/hvh7VYctIqo"}
          SW={SW}
          popState={popState}
          pageState={curPage === 1}
        />
      </StPlayerCont>
      
    </StScreenCont>
  )
}
export default Screen;

const StScreenCont = styled.div`
  overflow: hidden;
  position: relative;

  width: ${({ theme }) => `${theme.SW}px`};
  height: ${({ theme }) => `${theme.SH}px`};
`;

const StPlayerCont = styled.div`
  display: flex;
  justify-content: flex-start;
  transition: transform 0.5s ease;
  transform: ${ props => `translateX(${-1 * props.curPage * props.theme.SW}px)` };
`;

const StArrowWrap = styled.div`
  position: absolute;
  z-index: 5;
  top: 50%;
  transform: translateY(-50%);
  img {
    width: 32px;
    &:hover {
      cursor: pointer;
    }
  }

  ${
    props => props.dir === "left" ?
    css`
      left: 20px;
      img {
        transform: rotate(180deg);
      }
    `
    :
    css`
      right: 20px;
    `
  };
  
`;