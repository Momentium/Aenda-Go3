import React, { useState } from 'react';
import styled, { css } from 'styled-components';
import Player from './Player';
import { Zoom } from '@material-ui/core';

const Screen = ({ SW, popState }) => {
  const imgUrl = SW > 480 ? `vidArrow.svg` : `vidArrow_m.svg`;
  const [curPage, setCurPage] = useState(0);
  const toLeftPage = () => {
    setCurPage(curPage - 1);
  }
  const toRightPage = () => {
    setCurPage(curPage + 1);
  }
  
  return (
    <StScreenCont popState={popState}>
      {
        curPage !== 0 && 
        <Zoom in={true} timeout={250}>
          <StArrowWrap dir={"left"} onClick={toLeftPage}>
            <img src={`assets/icons/${imgUrl}`} alt="arrow-logo"/>
          </StArrowWrap>
        </Zoom>
      }
      {
        curPage !== 1 &&
        <Zoom in={true} timeout={250}>
          <StArrowWrap dir={"right"} onClick={toRightPage}>
            <img src={`assets/icons/${imgUrl}`} alt="arrow-logo"/>
          </StArrowWrap>
        </Zoom>
      }

      <StPlayerCont curPage={curPage}>
        <Player
          vidUrl={"https://vimeo.com/527216136"}
          SW={SW}
          popState={popState}
          pageState={curPage === 0}
        />
        <Player
          vidUrl={"https://vimeo.com/527216584"}
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
 
  width: 100%;
  height: 100%;
  /* width: ${({ theme }) => `${theme.SW}px`};
  height: ${({ theme }) => `${theme.SH}px`}; */

  transition: opacity 0.3s linear;
  opacity: ${props => props.popState ? 0 : 1 };
`;

const StPlayerCont = styled.div`
  display: flex;
  justify-content: flex-start;
  transition: transform 0.5s ease;
  transform: translateX(${ props => -1 * props.curPage * props.theme.SW}px);
`;

const StArrowWrap = styled.div`
  position: absolute;
  z-index: 5;
  @media screen and (min-width: 481px){
    top: 50%;
  }
  @media screen and (max-width: 480px){
    top: 56px;
  }
  
  img {
    @media screen and (min-width: 481px) {
      cursor: pointer;
      width: ${({theme}) => theme.calcVW(66)};
    }
    @media screen and (max-width: 480px) {
      width: ${({theme}) => theme.calcVW_M(30)};
    }
  }

  ${
    props => props.dir === "left" ?
    css`
      @media screen and (min-width: 481px){
        left: ${({theme}) => theme.calcVW(90.5)};
      }
      @media screen and (max-width: 480px){
        left: 25px;
      }
      img {
        transform: translateY(-50%) rotate(180deg);  
      }
    `
    :
    css`
      @media screen and (min-width: 481px){
        right: ${({theme}) => theme.calcVW(90.5)};
      }
      @media screen and (max-width: 480px){
        right: 25px;
      }
      img {
        transform: translateY(-50%);  
      }
    `
  };
  
`;
