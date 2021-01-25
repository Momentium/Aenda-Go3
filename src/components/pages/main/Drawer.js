import React, { useState, } from 'react';
import { Collapse } from '@material-ui/core';
import styled, { css } from 'styled-components';
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
        <div className="text drawer">{title}</div>
        <StArrowCont className="arrow-wrap">
          {
            hover || isOpen ?
            <img className="white" src="assets/icons/redarrow.svg" alt=""/>
            :
            <img className="black" src="assets/icons/arrow.svg" alt=""/>
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

const StDrawerWrap = styled.section`
  
  display: flex;
  justify-content: space-between;
  
  padding-top: 18px;
  padding-bottom: 18px;
  
  .arrow-wrap {
    transition: transform ease 0.1s;
  }

  ${ props  => props.isOpen ? 
    css`
      background-color: ${({ theme }) => theme.colors.blue};
      .text {
        color: ${({ theme }) => theme.colors.red};
      }
      .arrow-wrap {
        transform: rotate(-90deg);
      }
    `
    :
    css`
      background-color: white;
      .text {
        color: ${({ theme }) => theme.colors.black};
      }
      &:hover {
        cursor: pointer;
        background-color: ${({ theme }) => theme.colors.blue};
        .text {
          color: ${({ theme }) => theme.colors.red};
        }
      }
      .arrow-wrap {
        transform: rotate(0);
      }
    `
  };
`;

const StArrowCont = styled.div`
  img {
    width: 1.644em;
  }
`;