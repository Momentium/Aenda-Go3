import React, { useState, useEffect } from 'react';
import { Collapse } from '@material-ui/core';
import styled, { css } from 'styled-components';
import * as St from '../../styles/styledComp';
import arrow from '../../../assets/icons/arrow.svg';
import whiltearrow from '../../../assets/icons/whiltearrow.svg';
import Detail from './Detail';

const Drawer = ({title}) => {
  const [hover, setHover] = useState(false);
  const handleHover = () => {
    setHover(!hover);
  }

  const [isOpen, setIsOpen] = useState(false);
  const handleOpen = () => {
    setIsOpen(!isOpen);
  }

  return (
    <StDrawerCont>

      <StDrawerWrap 
        isOpen={isOpen} 
        isLastOne={title === "SEND TO MESSAGE"}
        onMouseOver={handleHover} 
        onMouseOut={handleHover} 
        onClick={handleOpen} 
      >
        <div className="text title">{title}</div>
        <StArrowCont className="arrow-wrap">
          {
            hover || isOpen ?
            <img className="white" src={whiltearrow} alt=""/>
            :
            <img className="black" src={arrow} alt=""/>
          }
        </StArrowCont>
      </StDrawerWrap>

      <Collapse in={isOpen}>
        <Detail/>
      </Collapse>

    </StDrawerCont>
  );
}
export default Drawer;

const StDrawerCont = styled.div`
  display: flex;
  flex-direction: column;

  * {
    -ms-user-select: none; 
    -moz-user-select: -moz-none;
    -khtml-user-select: none;
    -webkit-user-select: none;
    user-select: none;
  }
`;

const StDrawerWrap = styled(St.Section)`
  display: flex;
  justify-content: space-between;

  padding-top: 16px;
  padding-bottom: 16px;

  ${props => props.isLastOne && css`border: 0;`};

  .text {
    font-size: 1.250em;
    font-weight: 500;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.25;
    letter-spacing: -0.66px;
    text-align: left;
    color: #333333;
  }

  &:hover {
    cursor: pointer;
    background-color: #fe573d;
    .text {
      color: #f2f0ec;
    }
  }

  ${props => props.isOpen ? 
    css`
      background-color: #fe573d;
      .text {
        color: #f2f0ec;
      }
      .arrow-wrap {
        transform: rotate(-450deg);
        transition: transform ease 0.1s;
      }
    `
    :
    css`
      background-color: #f2f0ec;
      .text {
        color: #333333;
      }
      .arrow-wrap {
        transform: rotate(0);
        transition: transform ease 0.1s;
      }
    `
  };
`;

const StArrowCont = styled.div`
  img {
    width: 1.644em;
  }
`;