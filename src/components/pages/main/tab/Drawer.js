import React, { useState } from "react";
import { Collapse } from "@material-ui/core";
import styled, { css } from "styled-components";
import Detail from "./Detail";
import SlideList from "../slide/SlideList";
import { TagContxt } from "../../../common/ContextStorage";
import { drawerData } from "../../../../data/data";

const Drawer = ({ title }) => {
  const [isHov, setIsHov] = useState(false);
  const handleHover = () => {
    setIsHov(!isHov);
  };

  const [isOpen, setIsOpen] = useState(false);
  const handleOpen = () => {
    if (!isOpen) setCurTag("상상만개");
    setIsOpen(!isOpen);
  };

  const [curTag, setCurTag] = useState("상상만개");
  const handleCurTag = (_target) => {
    if(_target === 'reset') {
      setIsOpen(false);
      return;
    }

    setCurTag(_target.substring(1));
    if (!isOpen) {
      setIsOpen(true);
    }
  };

  return (
    <StDrawerCont>

      {title === drawerData.msg && <StLine isOpen={isOpen} isHov={isHov} />}

      <StDrawerWrap
        isOpen={isOpen}
        onMouseOver={handleHover}
        onMouseOut={handleHover}
        onClick={handleOpen}
        title={title === drawerData.msg}
      >

        <div className="text drawer">{title}</div>

        <StArrowCont className="arrow-wrap">
          {
            window.innerWidth > 480 ?
            isHov || isOpen ? (
              <img className="red" src={drawerData.arrow_red} alt="arrow-red" />
            ) : (
              <img className="black"  src={drawerData.arrow_black} alt="arrow-black" />
            )
            :
            isOpen ? (
              <img className="red" src={drawerData.arrow_mobile_red} alt="arrow-red" />
            ) : (
              <img className="black" src={drawerData.arrow_mobile_black} alt="arrow-black" />
            )
          }
        </StArrowCont>

      </StDrawerWrap>

      <TagContxt.Provider value={{ curTag, handleCurTag, isOpen, handleOpen }}>
        {title === drawerData.exhib && (
          <>
            <StLine isOpen={isOpen} isHov={isHov} />
            <SlideList isOpen={isOpen} />
          </>
        )}
      </TagContxt.Provider>

      <Collapse in={isOpen}>
        <Detail menu={title} curTag={curTag} />
      </Collapse>
    </StDrawerCont>
  );
};
export default Drawer;

const StDrawerCont = styled.div`
  /* ${({theme}) => theme.flex('', '', 'column')}; */
`;

const StDrawerWrap = styled.section`
  * {
    -ms-user-select: none;
    -moz-user-select: -moz-none;
    -khtml-user-select: none;
    -webkit-user-select: none;
    user-select: none;
  }

  /* display: flex;
  justify-content: space-between;
  align-items: center; */
  ${({theme}) => theme.flex('space-between', 'center')}

  ${ props => props.title ? 
    css`
      border-top: solid 1px ${props.theme.colors.blue};
      border-bottom: solid 2px ${props.theme.colors.blue};
    `
    :
    css`
      border-top: solid 2px ${props.theme.colors.blue};
    `
  }

  @media screen and (min-width: 481px) {
    cursor: pointer;
    height: ${({theme}) => theme.calcVW(120)};
    /* padding-top: 18px;
    padding-bottom: 18px; */
  }

  @media screen and (max-width: 480px) {
    padding-top: 36px;
    padding-bottom: 36px;
  }

  .arrow-wrap {
    transition: transform ease 0.1s;
  }

  @media screen and (min-width: 481px){
    &:hover {
      background: ${({ theme }) => theme.colors.blue};
      .text {
        color: ${({ theme }) => theme.colors.red};
      }
    }
  }

  ${(props) =>
    props.isOpen
      ? css`
          background: ${({ theme }) => theme.colors.blue};
          .text {
            color: ${({ theme }) => theme.colors.red};
          }
          .arrow-wrap {
            transform: rotate(-90deg);
          }
        `
      : css`
          background: white;
          .text {
            color: ${({ theme }) => theme.colors.black};
          }
          .arrow-wrap {
            transform: rotate(0);
          }
        `};
`;

const StArrowCont = styled.div`
  img {
    @media screen and (min-width: 481px) {
      width: ${({theme}) => theme.calcVW(52.67)};
    }
    @media screen and (max-width: 480px) {
      width: min(8.3333vw, 40px);
    }
  }
`;

const StLine = styled.div`
  width: 100%;
  height: 1px;
  background: ${(props) =>
    props.isHov || props.isOpen ? "white" : props.theme.colors.blue};
`;
