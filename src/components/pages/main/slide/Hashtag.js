import React, { useState, useEffect, useContext } from "react";
import styled, { css } from "styled-components";
import { TagContxt } from "../../../common/ContextStorage";

const Hashtag = ({ dataIdx, setPauseIdx, pauseIdx, idx, tag }) => {
  const { curTag, handleCurTag, isOpen, handleOpen } = useContext(TagContxt);
  const handleClick = (e) => {
    if(isOpen && `#${curTag}` === e.currentTarget.textContent) {
      setPauseIdx(-1);
      handleOpen();
    }
    else {
      setPauseIdx(dataIdx);
      handleCurTag(e.currentTarget.textContent);
    }
  };

  const [clickTab, setClickTab] = useState(false);
  useEffect(() => {
    if(isOpen && pauseIdx === -1 && dataIdx === 2 && tag === '상상만개') {
      setClickTab(true);
    }
    else {
      setClickTab(false);
    }
  }, [isOpen, pauseIdx, dataIdx, tag])

  return (
    <StHashCont
      className={`text hash-tag ${idx}`}
      isFocus={(pauseIdx === dataIdx && curTag === tag) || clickTab}
      onClick={handleClick}
    >
      {`#${tag}`}
    </StHashCont>
  );
};
export default Hashtag;

const StHashCont = styled.span`
  font-weight: 500;
  @media screen and (min-width: 481px) {
    font-size: ${({theme}) => theme.calcVW(40)};
    line-height: 1.25;
    letter-spacing: -0.66px;
  }
  @media screen and (max-width: 480px) {
    font-size: ${({theme}) => theme.calcVW_M(30)};
    line-height: 1.67;
    letter-spacing: -0.5px;
  }

  /* cursor: pointer; */
  @media screen and (min-width: 481px) {
    cursor: pointer;
    &:hover {
      background: ${({ theme }) => theme.colors.red};
      color: ${({ theme }) => theme.colors.blue};
    }
  }
  vertical-align: baseline;
  padding: 2px 12px 4px 12px;
  color: white;
  background: ${({ theme }) => theme.colors.blue};
  transition: all 0.1s linear;
  ${ props => 
  props.isFocus && 
  css`
    background: ${({ theme }) => theme.colors.red};
    color: ${({ theme }) => theme.colors.blue};
  `
  }
`;
